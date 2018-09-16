            //add svg to map
            L.svg({
                clickable: true
            }).addTo(map);

            //set the svg element
            var svg = d3.select("#map").select("svg")
                .attr("pointer-events", "auto")

            // creates a grouping on our svg
            var g = svg.select("g")

            //Toggle stores whether the highlighting is on
            var toggle = 0;
            //this has the state of the display - is it network or geographic? Choices are map and sim
            var positioning = 'map';

            // Extract the width and height that was computed by CSS.
            var chartDiv = document.getElementById("map");
            var width = chartDiv.clientWidth;
            var height = chartDiv.clientHeight;

            //for reading colors            
            var color = d3.scaleOrdinal(d3.schemeCategory20);

            var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            //after the map has been loaded, now load the d3js data and interact with our map
            d3.json(bamConfigJson.bamMainDataLocation, function(error, graph) {
                if (error) throw error;
                if (bamConfigJson.bamD3Config.sourceDataType.toLowerCase() == 'geojson')
                {
                	bamNodeRoot = 'features';
                	bamPropertyRoot = 'properties';
                }
                
                if (bamConfigJson.bamD3Config.sourceDataType.toLowerCase() == 'gephi')
                {
                	bamNodeRoot = 'nodes';
                	bamPropertyRoot = 'attributes';
                }
                
                if (bamConfigJson.bamD3Config.sourceDataType.toLowerCase() == "gephi") {
                    //links are the lines connecting our nodes
                    var link = svg.append("g")
                        .attr("class", bamConfigJson.bamD3Config.linksConfig.element)
                        .selectAll("line")
                        .data(graph.edges)
                        .enter().append("line")
                        .attr("stroke-width", function(d) {
                            return bamConfigJson.bamD3Config.linksConfig.strokeWidth;
                        });

}
                
                var node = svg.append("g")
                    .attr("class", bamNodeRoot)
                    .selectAll("circle")
                    .data(graph[bamNodeRoot])
                    .enter().append("circle")
                    .attr("r", function(d) {
                    	//check if there is a size attribute for the nodes. If not, default to minimum size
                    	if (typeof(d[bamConfigJson.bamD3Config.nodesConfig.programAttributes.size.attribute]) !== 'undefined')
						{
                        	var sizer = d[bamConfigJson.bamD3Config.nodesConfig.programAttributes.size.attribute] / bamConfigJson.bamD3Config.nodesConfig.nodeSizeDivider;
                        	if (sizer < bamConfigJson.bamD3Config.nodesConfig.nodeMinSize) 
                        	{
                            	return bamConfigJson.bamD3Config.nodesConfig.nodeMinSize;
                        	}
                        	if (sizer > bamConfigJson.bamD3Config.nodesConfig.nodeMaxSize) 
                        	{
                            	return bamConfigJson.bamD3Config.nodesConfig.nodeMaxSize;
                        	} else 
                        	{
                            return sizer;
                       		 }
                        }
                        else
                        {
                        	return bamConfigJson.bamD3Config.nodesConfig.nodeMinSize;
                        }
                    })
                    .attr("fill", function(d) {
                    	//check to see if there is a color defined. If not, default to white circles (they show up!)
                    	if(d.color){
                        	return color(d.color);}
                        	else return "white";
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

                     /*   for (i = 0; i < bamConfigJson.bamD3Config.nodesConfig.toolTipAttributes.length; i++) {
                            attributesHtml = attributesHtml + bamConfigJson.bamD3Config.nodesConfig.toolTipAttributes[i];
                            attributesHtml = attributesHtml + ': ' + d[bamPropertyRoot][bamConfigJson.bamD3Config.nodesConfig.toolTipAttributes[i]];
                            attributesHtml = attributesHtml + '<br />';
                        }*/
                        
                        //custom attributes for BLT until I can break this out as a separate function with different things you can do to them
						attributesHtml = attributesHtml + 'Time in archive: ' + d.attributes['Weighted In-Degree'];


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

                if (bamConfigJson.bamD3Config.sourceDataType.toLowerCase() == "gephi") {

                    // this code highlights only the nodes that are connected to the nide that is clicked
                    //Create an array logging what is connected to what
                    //here going to have to modify the example as we are linking by id, not index!
                    var linkedByIndex = {};
                    for (i = 0; i < graph.nodes.length; i++) {
                        linkedByIndex[graph.nodes[i].id + "," + graph.nodes[i].id] = 1;
                    };
                    graph.edges.forEach(function(d) {
                        linkedByIndex[d.source + "," + d.target] = 1;
                    });

                    // now for the simulation / force layout 
                    //some of the options from https://bl.ocks.org/syntagmatic/954b31aa8b8beb91b30ccb0c9e57f6ce
                    var simulation = d3.forceSimulation()
                        .force("link", d3.forceLink().id(function(d) {
                            return d.id;
                        }))
                        .force("collide", d3.forceCollide(function(d) {
                            return d.attributes[bamConfigJson.bamD3Config.nodesConfig.nodeMaxSize];
                        }).iterations(2))
                        .force("charge", d3.forceManyBody().strength(-10).distanceMax(300))
                        .force("center", d3.forceCenter(width / 2, height / 2))
                        .force("vertical", d3.forceY().strength(0.018))
                        .force("horizontal", d3.forceX().strength(0.006));

                    simulation
                        .nodes(graph.nodes)
                        .on("tick", ticked);

                    simulation.force("link")
                        .links(graph.edges);

                    //escape key closes the attribute pane and restores the network.
                    $(document).keyup(function(e) {
                        if (e.keyCode == 27) { // escape key maps to keycode `27`
                            returnOpacity();
                        }
                    });

                    //for setting the view correctly when the map state changes
                    map
                        .on("viewreset", ticked)
                        .on("move", ticked);

                    //fire the state change event to ensure that everything is where it should be
                    ticked();

                }
                //
                //functions for the d3 node portion
                //

                //This function looks up whether a pair are neighbours
                function neighboring(a, b) {
                    return linkedByIndex[a.id + "," + b.id];
                }

                // the ticked function
                function ticked() {
                if (positioning === 'map'){
                    node.attr("transform",
                        function(d) {
                        console.log(d);
                            //  if (d.fixed == true) {
                            var tempLatLng = new L.LatLng(d.attributes.lat, d.attributes.long);
                            d.x = map.latLngToLayerPoint(tempLatLng).x;
                            d.y = map.latLngToLayerPoint(tempLatLng).y;
                            return "translate(" +
                                map.latLngToLayerPoint(tempLatLng).x + "," +
                                map.latLngToLayerPoint(tempLatLng).y + ")";
                            //  }
                        }
                    );
}
/*
       else{
                	        node
            .attr('cx', function (d) { return d.x })
            .attr('cy', function (d) { return d.y });
                        simulation.alpha(1).restart();


                } */
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
                }

                //who is connected to who
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

                //return to our base opacity
                function returnOpacity() {
                    node.style("opacity", 1);
                    link.style("opacity", 1);
                    toggle = 0;
                }

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
                
                //from the map file, due to simulation variable moving back and forth
                $( "#visToggle" ).click(function() {
                
                if (positioning === 'map') {
        } else {
           // fixed()
        }


});


                //end of the d3js block      
            });

