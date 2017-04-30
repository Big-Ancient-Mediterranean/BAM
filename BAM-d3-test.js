//network-no-map.js
//this js file gives BAM functionality to display a Gephi network without a mapping overlay - useful if you just want to show SNA
//
//Toggle stores whether the highlighting is on
var toggle = 0;

// zoom from https://jsfiddle.net/skgktrcu/
var zoom = d3.zoom()
    .scaleExtent([.2, 10])
    .on("zoom", zoomed);

var chartDiv = document.getElementById("d3MainChart");

// Extract the width and height that was computed by CSS.
var width = chartDiv.clientWidth;
var height = chartDiv.clientHeight;

var svg = d3.select(chartDiv).append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom)
    .append("g");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//some of the options from https://bl.ocks.org/syntagmatic/954b31aa8b8beb91b30ccb0c9e57f6ce

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) {
        return d.id;
    }))
    .force("collide", d3.forceCollide(function(d) {
        return d.size / 2
    }).iterations(2))
    .force("charge", d3.forceManyBody().strength(-10).distanceMax(200))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("vertical", d3.forceY().strength(0.018))
    .force("horizontal", d3.forceX().strength(0.006));

//after the map has been loaded, now load the d3js data and interact with our map
d3.json(bamConfigJson.bamMainDataLocation, function(error, graph) {
    if (error) throw error;
    if (bamConfigJson.bamSourceDataType.toLowerCase() == 'geojson') {
        bamNodeRoot = 'features';
        bamPropertyRoot = 'properties';
    }

    if (bamConfigJson.bamSourceDataType.toLowerCase() == 'gephi') {
        bamNodeRoot = 'nodes';
        bamPropertyRoot = 'attributes';
    }

    if (bamConfigJson.bamSourceDataType.toLowerCase() == "gephi") {
        //links are the lines connecting our nodes
        var link = svg.append("g")
            .attr("class", bamConfigJson.bamLinkElement)
            .selectAll("line")
            .data(graph.edges)
            .enter().append("line")
            .attr("stroke-width", function(d) {
                return bamConfigJson.bamStrokeWidth;
            });

    }

    var node = svg.append("g")
        .attr("class", bamNodeRoot)
        .selectAll("circle")
        .data(graph[bamNodeRoot])
        .enter().append("circle")
        .attr("r", function(d) {
            //check if there is a size attribute for the nodes. If not, default to minimum size
            if (typeof(d.size) !== 'undefined') {
                var sizer = d.size / bamConfigJson.bamSizeDivider;
                if (sizer < bamConfigJson.bamNodeMinSize) {
                    return bamConfigJson.bamNodeMinSize;
                }
                if (sizer > bamConfigJson.bamNodeMaxSize) {
                    return bamConfigJson.bamNodeMaxSize;
                } else {
                    return sizer;
                }
            } else {
                return bamConfigJson.bamNodeMinSize;
            }
        })
        .attr("fill", function(d) {
            //check to see if there is a color defined. If not, default to white circles (they show up!)
            if (d.color) {
                return color(d.color);
            } else return "white";
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("mouseover", function(d) {
            div.transition()
                .style("opacity", .9);
            var titleHtml = '<center><b>' + d[bamPropertyRoot][bamConfigJson.bamToolTipTitle] + '</b></center>';
            var attributesHtml = '<br />';

            for (i = 0; i < bamConfigJson.bamToolTipAttributes.length; i++) {
                attributesHtml = attributesHtml + bamConfigJson.bamToolTipAttributes[i];
                attributesHtml = attributesHtml + ': ' + d[bamPropertyRoot][bamConfigJson.bamToolTipAttributes[i]];
                attributesHtml = attributesHtml + '<br />';
            }

            //now to iterate through the array of attributes desired in the tooltip
            div.html(titleHtml + attributesHtml)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px")
                // change the tooltip background to the node color
                .style("background", color(d.color));
        })
        .on("mouseout", function(d) {
            div.transition()
                .style("opacity", 0);
        })
        .on("click", function(d) {
            connectedNodes(d);
            // the stop is necessary - see http://stackoverflow.com/questions/22941796/attaching-onclick-event-to-d3-chart-background  
            d3.event.stopPropagation();
        });

    node.append("title")
        .text(function(d) {
            return d[bamPropertyRoot][bamConfigJson.bamToolTipTitle];
        });

    if (bamConfigJson.bamSourceDataType.toLowerCase() == "gephi") {

        var linkedByIndex = {};
        for (i = 0; i < graph.nodes.length; i++) {
            linkedByIndex[graph.nodes[i].id + "," + graph.nodes[i].id] = 1;
        };
        graph.edges.forEach(function(d) {
            linkedByIndex[d.source + "," + d.target] = 1;
        });
        //This function looks up whether a pair are neighbours
        function neighboring(a, b) {
            return linkedByIndex[a.id + "," + b.id];
        }

        // see http://stackoverflow.com/questions/22941796/attaching-onclick-event-to-d3-chart-background
        $("svg:not('.node')").on("click", function() {
            returnOpacity();
        });

        // now for the simulation / force layout 
        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.edges);

        simulation.alphaDecay(.0057);


        // the ticked function 
        function ticked() {
            link
                .attr("x1", function(d) {
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

            node
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });
        }


        function connectedNodes(d) {
            var connectedList = {};
            if (toggle == 0) {
                //Reduce the opacity of all but the neighbouring nodes
                node.style("opacity", function(o) {
                    if (neighboring(d, o) == 1 || neighboring(o, d) == 1) {
                        // we do not want to list a self-connection
                        if (o != d) {
                            connectedList[o.index] = o.id;
                        }
                        return 1;
                    } else {
                        return .1;
                    }
                });
                link.style("opacity", function(o) {
                console.log(o);
                    return d.index == o.source.index | d.index == o.target.index ? 1 : 0.1;
                });

                $('#right-side-text-connected-list').html('');
                $('#right-side-text-connected-list').append('<br /><br /> <b>Connections:</b>');


                for (var property in connectedList) {
                    if (connectedList.hasOwnProperty(property)) {
                        //       alphaListSort.push (connectedList[property]);

                        var $something = $('<input/>').attr({
                            type: 'button',
                            id: property,
                            name: 'btn_' + connectedList[property],
                            value: connectedList[property]
                        });

                        $something.click(function() {

                            //this is the button functionality I will have to use
                            svg.selectAll("circle").each(function(d, i) {
                                console.log(this);

                                if (this.id == d.index) {
                                    connectedNodes(d);
                                }
                            });

                        });
                        $('#right-side-text-connected-list').append('<br />');
                        $('#right-side-text-connected-list').append($something);
                    }
                }

            } else {
                //Put them back to base opacity
                returnOpacity();
            }
        }


        function returnOpacity() {
            node.style("opacity", 1);
            link.style("opacity", 1);
            toggle = 0;
        }

        //escape key closes the attribute pane and restores the network.
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode '27'
                returnOpacity();
            }
        });

        zoom.scaleTo(svg, 1);

        //escape key closes the attribute pane and restores the network.
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                returnOpacity();
            }
        });

        //end of the d3js block      
    }

});
//the following could be changed or modified - they are not part of a fixed simulation. Will add ,ore nodes to play around
function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}


function zoomed() {
    svg.attr("transform", d3.event.transform);
}