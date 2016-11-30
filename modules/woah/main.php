<?php
   $PageTitle="WAH: Women in Ancient History";
   $NavBarBrand ="WAH: Women in Ancient History";
      include_once('../common-files/includes/BAM-header.php');
   include_once('../common-files/includes/BAM-map-headers.php');
   include_once('../common-files/includes/BAM-datatable-headers.php');

?>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <link rel="stylesheet" href="../common-files/css/main.css" type="text/css" />
    </head>

    <body>

        <?php 
		include_once('BAM-navigation.php');
		include_once('BAM-panels.php');
		include_once('BAM-layout.php'); 
		


		?>

        <script>
            var availableTags = [];
            var placesHolder = [];
            var placesList = {};

            var dynamicPlacesStyle = {
                "color": "#ff7800",
                "weight": 5,
                "opacity": 0.65
            };
            //list here any html, tables, etc that need to be appended to the base format
            //adding a table for the entity holder

            $('#entityConnectionsContainer').append('<table id="entityConnections" class="display" cellspacing="0" width="80%">' +
                '<thead><tr><th>Connections</th></tr></thead><tbody></tbody></table>');
            var entityConnectionsTable = $('#entityConnections').DataTable();

            $('#entityConnectionsContainer').hide();
            $('#leftTextPane').hide();



            var width = $("#networkpane").width();
            var height = $("#networkpane").height();
            var largestNodeSize = 0;

            var svg = d3.select("#networkpane")
                .append("div")
                .classed("svg-container", true) //container class to make it responsive
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                //ugly, ugly hardcoding. Will do this programatically in the future
                .attr("viewBox", "-3500 -1100 " + width * 7 + " " + height * 7)
                //class to make it responsive
                .classed("svg-content-responsive", true)
                .call(d3.behavior.zoom().on("zoom", function() {
                    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
                }))
                .append("g");


            //Set up tooltip
            //found at http://www.coppelia.io/2014/07/an-a-to-z-of-extra-features-for-the-d3-force-layout/
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    return d.label + "";
                })

            svg.call(tip);


            var force = d3.layout.force()
                .size([width, height]);

            d3.json("women.json", function(error, json) {

                var colorGroups = [];
                var largestNode = {};

                var nodes = json.nodes.map(function(d) {

                    var a = d.color.split("(")[1].split(")")[0];
                    a = a.split(",");

                    var b = a.map(function(x) { //For each array element
                        x = parseInt(x).toString(16); //Convert to a base16 string
                        return (x.length == 1) ? "0" + x : x; //Add zero if we get only one character
                    })

                    b = "#" + b.join("");

                    //see how many groups we have in the data. This is determined by color from the Gephi output
                    if (colorGroups.indexOf(b) == -1) {
                        colorGroups.push(b);
                    }

                    //check if our array of largest sizes has the largest one for each node, assign if necessary. Naming groups by largest (or one of the largest) member, object names as color
                    if (!(b in largestNode) || (largestNode[b].size < d.size)) {
                        if (largestNodeSize < d.size) {
                            largestNodeSize = d.size;
                        }
                        largestNode[b] = {
                            size: d.size,
                            label: d.label,
                            id: d.id
                        }
                    }
                    //pull out the geo-data and make some geojson
                    if (d.attributes.type == 'place') {

                        var geojsonFeature = {
                            'type': 'Feature',
                            'properties': {
                                'id': d.id,
                                'label': d.label,
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [d.attributes.longitude, d.attributes.latitude]
                            }
                        };

                        placesHolder.push(geojsonFeature);
                        placesList[d.id] = geojsonFeature;

                    }

                    availableTags.push(d.label);
                    //all of the data we want for the nodes. Will make this a config later
                    return {
                        'index': d.id,
                        'id': d.id,
                        'label': d.label,
                        'size': d.size * 1.5,
                        'color': b,
                        'type': d.attributes.type,
                        'image': d.attributes.image,
                        'x': d.x,
                        'y': d.y,
                        'fixed': true
                    }

                })

                var edges = [];

                json.edges.forEach(function(e) {
                    var sourceNode = nodes.filter(function(n) {
                            return n.id === e.source;
                        })[0],
                        targetNode = nodes.filter(function(n) {
                            return n.id === e.target;
                        })[0];

                    edges.push({
                        source: sourceNode,
                        target: targetNode,
                        value: e.Value
                    });
                });

                force
                    .nodes(nodes)
                    .links(edges);


                var link = svg.selectAll(".link")
                    .data(edges)
                    .enter().append("line")
                    .attr("class", "link");

                var node = svg.selectAll(".node")
                    .data(nodes)
                    .enter().append("g")
                    .attr("class", "node")
                    .call(force.drag)
                    .on('mouseover', tip.show) //Added
                    .on('mouseout', tip.hide) //Added 
                    .on("mousedown", function(e) {
                        mouseDownAction(e, true)
                    })
                    //styling information. May break this out to a config so it is referenced once
                    .style("stroke", "black")
                    .style("opacity", .9)
                    .style("fill", function(d) {
                        return d.color;
                    });

                node.append("circle")
                    .attr("class", "node")
                    .style("fill", function(d) {
                        return d.color;
                    })
                    .attr("r", function(d) {
                        return d.size;
                    });


                node.append("svg:a")
                    .attr("xlink:href", function(d) {
                        return d.Url;
                    })
                    .append("text")
                    .attr("dx", 12)
                    .attr("dy", ".35em");
                //Toggle stores whether the highlighting is on
                var toggle = 0;

                //Create an array logging what is connected to what
                //here going to have to modify the example as we are linking by id, not index!
                var linkedByIndex = {};
                for (i = 0; i < json.nodes.length; i++) {
                    linkedByIndex[json.nodes[i].id + "," + json.nodes[i].id] = 1;
                };
                json.edges.forEach(function(d) {
                    linkedByIndex[d.source + "," + d.target] = 1;
                });
                //This function looks up whether a pair are neighbours
                function neighboring(a, b) {
                    return linkedByIndex[a.id + "," + b.id];
                }

                function connectedNodes(d) {
                    if (toggle == 0) {
                        //Reduce the opacity of all but the neighbouring nodes
                        node.style("opacity", function(o) {
                            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
                        });
                        link.style("opacity", function(o) {
                            return d.index == o.source.index | d.index == o.target.index ? 1 : 0.1;
                        });

                    } else {
                        //Put them back to base opacity
                        returnOpacity();
                    }
                }


                function connectedNodesList(d) {
                    var personHolder = [];
                    var mapConnectionsHolder = [];

                    //lots of ugliness here. Will need to make this more efficient in the future.
                    for (i = 0; i < json.nodes.length; i++) {
                        o = json.nodes[i];
                        if (neighboring(d, o) | neighboring(o, d) == 1) {
                            //why list something twice? So we won't
                            if (o.label != d.label) {
                                entityConnectionsTable.row.add([o.label]);
                                if (o.attributes.type == 'person') {
                                    personHolder.push(o);
                                }
                                if (o.attributes.type == 'place') {
                                    mapConnectionsHolder.push(placesList[o.id]);
                                }

                            }
                        }
                    }

                    for (i = 0; i < personHolder.length; i++) {
                        for (j = 0; j < json.nodes.length; j++) {
                            d = personHolder[i];
                            o = json.nodes[j];
                            if (neighboring(d, o) | neighboring(o, d) == 1) {
                                //why list something twice? So we won't
                                if (o.label != d.label) {
                                    if (o.attributes.type == 'place') {
                                        mapConnectionsHolder.push(placesList[o.id]);
                                    }

                                }
                            }
                        }
                    }
//now for connections

                    map.removeLayer(work_locations);
                    work_locations = new L.geoJson(mapConnectionsHolder, {
                        onEachFeature: onEachFeature
                    });

                    work_locations.addTo(map);
                    map.fitBounds(work_locations.getBounds());


                    //  map.removeLayer(work_locations);


                    $('#leftTextPane').show();

                    $('#entityConnectionsContainer').show();
                    entityConnectionsTable.draw();
                }

                function connectedNodesMap(d) {}

                //maybe could make all of this a singular function?

                $('#questionLauncher').click(function() {
                    $('#infoBox').hide();
                    $('#helpBox').show();
                });


                $('#aboutLauncher').click(function() {
                    $('#helpBox').hide();
                    $('#infoBox').show();
                });


                $('#attributeCloseBox').mousedown(function() {
                    $('#attributepane').hide();

                    returnOpacity();
                });


                $('#helpBoxCloseBox').mousedown(function() {
                    $('#helpBox').hide();
                });

                $('#infoBoxCloseBox').mousedown(function() {
                    $('#infoBox').hide();
                });



                $('#textCloseBox').mousedown(function() {
                    $('#textpane').hide();
                });

                //escape key closes the attribute pane and restores the network.
                $(document).keyup(function(e) {
                    if (e.keyCode == 27) { // escape key maps to keycode `27`
                        $('#attributepane').hide();
                        $('#textpane').hide();
                        $('#infoBox').hide();
                        $('#helpBox').hide();
                        //return the opacity settings to default
                        //perhaps make this so only if nothing was hidden? Need a toggle to determine this
                        returnOpacity();
                    }
                });

                function returnOpacity() {

                    node.style("opacity", .9);
                    link.style("opacity", .2);
                    toggle = 0;
                }


                force.on("tick", function(e) {

                    link.attr("x1", function(d) {
                            return d.source.x;
                        })
                        .attr("y1", function(d) {
                            return d.source.y;
                        })
                        .attr("x2", function(d) {
                            return d.target.x;
                        })
                        .attr("y2", function(d) {
                            return d.target.y;
                        });

                    node.attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });
                });

                $('#entityConnections tbody').on('click', 'tr', function() {

                    var tableData = entityConnectionsTable.row(this).data();
                    d3.selectAll(".node").each(function(d, i) {
                        //there is only one case where this happens as id is unique. Not terribly efficient, so I need to change it
                        if (d.label == tableData) {
                            //fire off the selection event
                            mouseDownAction(d, false);
                        }
                    });
                });
                force.start();

                //finally got this from here: https://groups.google.com/forum/#!topic/d3-js/T05RnxO5IFQ
                function mouseDownAction(d, table) {

                    connectedNodes(d);


                    entityConnectionsTable.clear();

                    connectedNodesList(d);
                    //put in blank values if there are no attributes
                    var titleForBox, imageForBox, descriptionForBox = '';
                    titleForBox = d.label;

                    descriptionForBox = '';

                    if (typeof d.image != "undefined") {
                        imageForBox = '<center><img src="' + d.image + '" height="100"></center>';
                    } else {
                        imageForBox = '';
                    }
                    var boxbuttons = '';

                    $("#leftTextPaneContent").html(titleForBox);

                    connectedNodesMap(d);

                }

                availableTags.sort();
                $("#tags").autocomplete({
                    source: availableTags,
                    select: function(a, b) {
                        d3.selectAll(".node").each(function(d, i) {
                            //there is only one case where this happens as id is unique. Not terribly efficient, so I need to change it
                            if (d.label == b.item.value) {
                                //fire off the selection event
                                mouseDownAction(d, true);
                            }
                        });
                    }
                });

                var mapLayerGroups = [];


                function onEachFeature(feature, layer) {


                    //bind click
                    layer.on('click', function(e) {

                        d3.selectAll(".node").each(function(d, i) {
                            //there is only one case where this happens as id is unique. Not terribly efficient, so I need to change it
                            if (d.label == e.target.feature.properties.label) {
                                //fire off the selection event
                                mouseDownAction(d, true);
                            }
                        });


                        var titleForBox = e.target.feature.properties.Affiliatio;
                        var htmlForBox = titleForBox;
                        $("#leftTextPaneContent").html(htmlForBox);
                    });
                }

                //setup the map
                L.mapbox.accessToken = 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ';
                var map = L.mapbox.map('map', null, {
                    maxZoom: 6
                }).setView([40.58058, 36.29883], 4);

                var layers = {
                    AWMC: L.mapbox.tileLayer('isawnyu.map-p75u7mnj', {
                        maxZoom: 6
                    }),
                    Empty: new L.tileLayer('')
                };

                layers.AWMC.addTo(map);
                L.control.scale().addTo(map);


                var work_locations = new L.geoJson(placesHolder, {
                    onEachFeature: onEachFeature
                });

                work_locations.addTo(map);
                map.fitBounds(work_locations.getBounds());


            });
        </script>

        <?php include_once('../common-files/includes/BAM-footer.php');
      ?>
    </body>

    </html>