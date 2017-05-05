//network-no-map.js
//this js file gives BAM functionality to display a Gephi network without a mapping overlay - useful if you just want to show SNA
//
//most global variables start with d3Networks so they can be referenced if needed in other parts of BAM without name spaces getting all wonky
//stores a list of nodes
var d3NetworksnodeList = [];

//shorten things a bit for readability
var d3ConfigHolder = bamConfigJson.bamD3Config;
var d3NetworksNodeConfigHolder = d3ConfigHolder.nodesConfig;

var activeGroup;
var activeNode;

if (d3NetworksNodeConfigHolder.groupTableLocation) {
    //create a blank group table that we will add to and modify later
    var d3GroupsTable = $('#' + d3NetworksNodeConfigHolder.groupTableLocation).DataTable({
        "columns": d3NetworksNodeConfigHolder.groupTableColumns,
        "autoWidth": false,
        "bLengthChange": false,
        "pageLength": 5
    });
}

//create a blank master connections table
var d3NetworksConnectionsFullTable = $('#' + d3NetworksNodeConfigHolder.connectionTableLocation).DataTable({
    "columns": d3NetworksNodeConfigHolder.connectionTableColumns,
    dom: 'Bfrtip',
    "bAutoWidth": false,
    "sPaginationType": "full_numbers",
    "pageLength": 5,
    buttons: [
        'colvis', 'copy', 'csv'
    ]
});

//create a blank master nodes table
var nodeListTable = $('#' + d3NetworksNodeConfigHolder.nodeTableLocation).DataTable({
    "columns": d3NetworksNodeConfigHolder.nodeTableColumns,
    dom: 'Bfrtip',
    "bAutoWidth": false,
    "sPaginationType": "full_numbers",
    "pageLength": 5,
    buttons: [
        'colvis', 'copy', 'csv'
    ]
});

//add searchable text areas to the top of our columns
makeDataTablesColumnsSearchable(nodeListTable, d3NetworksNodeConfigHolder.nodeTableLocation);
makeDataTablesColumnsSearchable(d3NetworksConnectionsFullTable, d3NetworksNodeConfigHolder.connectionTableLocation);

//centered node
var centeredNode;

//Toggle stores whether the highlighting is on
var toggle = 0;

// zoom from https://jsfiddle.net/skgktrcu/
var zoom = d3.zoom()
    .scaleExtent([d3ConfigHolder.svgZoomMinFactor, d3ConfigHolder.svgZoomMaxFactor])
    .on("zoom", zoomed);

var chartDiv = document.getElementById(bamConfigJson.bamD3Config.chartDiv);

// Extract the width and height that was computed by CSS.
var width = chartDiv.clientWidth;
var height = chartDiv.clientHeight;

var d3NetworkSvg = d3.select(chartDiv).append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom)
    .append("g");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var d3NetworkDiv = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//some of the options from https://bl.ocks.org/syntagmatic/954b31aa8b8beb91b30ccb0c9e57f6ce

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) {
        return d.id;
    }))
    .force("collide", d3.forceCollide(function(d) {
        return d.size / 2
    }).iterations(d3ConfigHolder.simulationIterations))
    .force("charge", d3.forceManyBody().strength(d3ConfigHolder.simulationChargeStrength).distanceMax(d3ConfigHolder.simulationDistanceMax))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("vertical", d3.forceY().strength(d3ConfigHolder.simulationVerticalStrength))
    .force("horizontal", d3.forceX().strength(d3ConfigHolder.simulationHorizontalStrength));


var d3NetworksGraph = d3.json(bamConfigJson.bamD3Config.sourceData, function(error, graph) {
    if (error) throw error;

    //put the tables that have buttons which interact with D3 Application data here

    //create a blank connections table that we will add to and modify later
    var d3NetworksConnectionsResultsTable = $('#' + d3NetworksNodeConfigHolder.connectionResultsLocation).DataTable({
        "columns": d3NetworksNodeConfigHolder.connectionResultsColumns,
        dom: 'Bfrtip',
        "autoWidth": false,
        "bLengthChange": false,
        "pageLength": 5,
        buttons: [{
                text: 'Display Connections',
                action: function() {
                    //highlightNodeGroup(activeGroup, d3NetworkSvg, false);
                    if (activeNode)
                        createInfoMasthead(activeNode, false, bamConfigJson.bamMoreInfoPanel, true);
                }
            },
            'copy',
            'csv'
        ]
    });

    //create a blank connections table that we will add to and modify later
    var d3GroupsResultsTable = $('#' + d3NetworksNodeConfigHolder.groupResultsTableLocation).DataTable({
        "columns": d3NetworksNodeConfigHolder.groupResultsColumns,
        dom: 'Bfrtip',
        "autoWidth": false,
        "bLengthChange": false,
        "pageLength": 5,
        buttons: [{
                text: 'Display Group',
                action: function() {
                    highlightNodeGroup(activeGroup, d3NetworkSvg, false);
                }
            },
            'copy',
            'csv'
        ]
    });

    makeDataTablesColumnsSearchable(d3GroupsResultsTable, d3NetworksNodeConfigHolder.groupResultsTableLocation);


    var d3NetworksConnectionsFullTableHolder = [];

    var link = d3NetworkSvg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.edges)
        .enter().append("line")
        .attr("stroke-width", function(d) {
            return Math.sqrt(d.value);
        });

    var node = d3NetworkSvg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", function(d) {
            //check if there is a size attribute for the nodes. If not, default to minimum size
            if (typeof(d.size) !== 'undefined') {
                var sizer = d.size / d3NetworksNodeConfigHolder.nodeSizeDivider;
                if (sizer < d3NetworksNodeConfigHolder.nodeMinSize) {
                    return d3NetworksNodeConfigHolder.nodeMinSize;
                } else if (sizer > d3NetworksNodeConfigHolder.nodeMaxSize) {
                    return d3NetworksNodeConfigHolder.nodeMaxSize;
                } else {
                    return sizer;
                }
            } else {
                return d3NetworksNodeConfigHolder.nodeMinSize;
            }
        })
        .attr("fill", function(d) {
            return color(getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.color));
        })
        .attr("title", function(d) {
            return getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.label);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("mouseover", function(d) {
            d3NetworkDiv.transition()
                .style("opacity", d3NetworksNodeConfigHolder.toolTipOpacity);
            var titleHtml = '<center><b>' + getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.toolTipTitle) + '</b></center>';
            var attributesHtml = '';

            //get the attributes for the tooltip as specified in our config. The actual attributes are variable depending on the project
            attributesHtml = attributesHtml + createHtmlFromD3Attributes(d, d3NetworksNodeConfigHolder.toolTipAttributes);

            //now to iterate through the array of attributes desired in the tooltip
            d3NetworkDiv.html(titleHtml + attributesHtml)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px")
                // change the tooltip background to the node color
                .style("background", function() {
                    return color(getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.color));
                });
        })
        .on("mouseout", function(d) {
            d3NetworkDiv.transition()
                .style("opacity", 0);
        })
        .on("click", function(d) {
            styleD3Selection(d);
            createInfoMasthead(d, true, bamConfigJson.bamMoreInfoPanel, true);
            if (informationToggle == false) {
                informationToggle = informationPaneToggle(informationToggle, bamConfigJson.bamMoreInfoPanel.panelID, bamConfigJson.bamMoreInfoPanel.panelToggleButton);
            }
        });

    //create an object to hold our groups    
    var nodeGroups = {};
    var groupsExist = false;
    //check to see if it is there!
    if (d3NetworksNodeConfigHolder.groupSelectorAttributes[0].attributeTitle) {
        groupsExist = true;
        for (var propt in d3NetworksNodeConfigHolder.groupSelectorAttributes) {
            nodeGroups[d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].attributeTitle] = {};
            nodeGroups[d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].attributeTitle].holder = d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].holder;
            nodeGroups[d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].attributeTitle].attribute = d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].attribute;
            nodeGroups[d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].attributeTitle].primaryColor = d3NetworksNodeConfigHolder.groupSelectorAttributes[propt].primaryColor;
        }
    }

    // Highlight only the nodes that are connected to the nide that is clicked
    // Create an array logging what is connected to what
    // here we link by id, not index, otherwise we could run into strange things
    var linkedByIndex = {};
    for (i = 0; i < graph.nodes.length; i++) {
        //setup Groups
        if (groupsExist == true) {
            for (var groupInfo in nodeGroups) {
                var tempGroupId = getD3AttributeValueFromConfig(graph.nodes[i], nodeGroups[groupInfo]);
                nodeGroups[groupInfo][tempGroupId] = {};
                nodeGroups[groupInfo][tempGroupId].color = color(getD3AttributeValueFromConfig(graph.nodes[i], d3NetworksNodeConfigHolder.programAttributes.color));
            }
        }

        linkedByIndex[graph.nodes[i].id + "," + graph.nodes[i].id] = 1;
    };

    if (groupsExist == true) {

        groupHolderDataTable(d3NetworksNodeConfigHolder.groupSearchTable, d3GroupsTable, nodeGroups);

        $('#' + d3NetworksNodeConfigHolder.groupTableLocation + ' tbody').on('click', 'tr', function() {
            var data = d3GroupsTable.row(this).data();
            highlightNodeGroup(data.number, d3NetworkSvg, true);
            createInfoMasthead(activeNode, false, bamConfigJson.bamMoreInfoPanel, true);
            populateGroupResultsTable(activeNode);
            highlightNodeGroup(data.number, d3NetworkSvg, true);
            zoomToD3Selection(activeNode);
        });
    }

    graph.edges.forEach(function(d) {
        linkedByIndex[d.source + "," + d.target] = 1;
    });

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

    d3NetworkSvg.selectAll("line").each(function(d2, i) {
        var tableDataHolder = {};
        //NEED TO MAKE THIS CONFIGURABLE;
        tableDataHolder.sourceTitle = d2.source.attributes.title;
        tableDataHolder.sourceIndex = d2.source.index;
        tableDataHolder.targetTitle = d2.target.attributes.title;
        tableDataHolder.targetIndex = d2.target.index;
        d3NetworksConnectionsFullTableHolder.push(tableDataHolder);
    });


    d3NetworksConnectionsFullTable.rows.add(d3NetworksConnectionsFullTableHolder);
    d3NetworksConnectionsFullTable.draw();


    var allNodesHolder = [];

    d3NetworkSvg.selectAll("circle").each(function(d, i) {

        populateBamDataTableFromNode(d3NetworksNodeConfigHolder.nodeTableColumns, d, allNodesHolder)
    });

    nodeListTable.rows.add(allNodesHolder);
    nodeListTable.draw();


    $('#' + d3NetworksNodeConfigHolder.connectionTableLocation + ' tbody').on('click', 'td', function() {

        if (d3NetworksConnectionsFullTable.cell(this).index().column < d3NetworksConnectionsFullTable.init().columns.length - 1) {
            var nextColumn = d3NetworksConnectionsFullTable.cell(d3NetworksConnectionsFullTable.cell(this).index().row, d3NetworksConnectionsFullTable.cell(this).index().column + 1);
            if (nextColumn.node().className.indexOf("bamIndexHolder") >= 0) {
                d3NetworkSvg.selectAll("circle").each(function(d, i) {

                    if (nextColumn.data() == d.index) {
                        createInfoMasthead(d, false, bamConfigJson.bamMoreInfoPanel, true);
                        connectedNodes(d);
                        zoomToD3Selection(d);
                    }
                });
            }
        }
        if (informationToggle == false) {
            informationToggle = informationPaneToggle(informationToggle, bamConfigJson.bamMoreInfoPanel.panelID, bamConfigJson.bamMoreInfoPanel.panelToggleButton);
        }
    });

    $('#' + d3NetworksNodeConfigHolder.nodeTableLocation + ' tbody').on('click', 'tr', function() {
        var data = nodeListTable.row(this).data();
        d3NetworkSvg.selectAll("circle").each(function(d2, i) {

            if (data.index == d2.index) {
                createInfoMasthead(d2, false, bamConfigJson.bamMoreInfoPanel, true);
                connectedNodes(d2);
                zoomToD3Selection(d2);
            }
        });
        if (informationToggle == false) {
            informationToggle = informationPaneToggle(informationToggle, bamConfigJson.bamMoreInfoPanel.panelID, bamConfigJson.bamMoreInfoPanel.panelToggleButton);
        }
    });

    //pulling this out here due to index issue
    for (i = 0; i < graph.nodes.length; i++) {
        var nodeListHolder = [];
        //NEED TO MAKE THIS CONFIGURABLE
        nodeListHolder.push(graph.nodes[i].label);
        nodeListHolder.push(graph.nodes[i].index);
        d3NetworksnodeList.push(nodeListHolder);
    }


    //
    //Functions
    //

    function highlightNodeGroup(number, svg, mastHead) {
        activeGroup = number;
        var largestMemberHolder = {};
        largestMemberHolder.node = null;
        largestMemberHolder.nodeDegree = -1;

        node.style("opacity", function(d) {
            if (d.attributes["Modularity Class"] == number) {
                if (parseInt(d.attributes["In-Degree"], 10) > largestMemberHolder.nodeDegree) {
                    largestMemberHolder.node = d;
                    largestMemberHolder.nodeDegree = d.attributes["In-Degree"];

                }
                return 1;
            } else {
                return .1;
            }
        });

        link.style("opacity", function(o) {
            //expanded from the example to add more functionality
            if (o.target.attributes["Modularity Class"] == number && o.source.attributes["Modularity Class"] == number) {
                return 1;
            } else {
                return .1;
            }
        });

        if (mastHead == true) {
            createInfoMasthead(largestMemberHolder.node, false, bamConfigJson.bamMoreInfoPanel, false);
            zoomToD3Selection(largestMemberHolder.node);
        }

        if (informationToggle == false) {
            informationToggle = informationPaneToggle(informationToggle, bamConfigJson.bamMoreInfoPanel.panelID, bamConfigJson.bamMoreInfoPanel.panelToggleButton);
        }
    }

    function groupHolderDataTable(dropDownHtml, table, groupsList) {

        for (var propt in nodeGroups) {
            for (var listData in nodeGroups[propt]) {
                if (isNaN(listData) == false) {
                    listHtml = listData;
                    colorHtml = '<svg width="40" height="30"><svg width="80" height="40"><rect width="40" height="30" style="fill:' + nodeGroups[propt][listData].color + ';stroke-width:3;stroke:rgb(0,0,0)" /></svg> &nbsp;&nbsp;&nbsp;';
                    table.row.add({
                        "number": listHtml,
                        "color": colorHtml
                    });
                }
                table.draw();
            }
        }
    }

    //This function looks up whether a pair are neighbours
    function neighboring(a, b) {
        return linkedByIndex[a.id + "," + b.id];
    }

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
    //currentwork
    function populateGroupResultsTable(node) {
        //parse the node to get a correct entry
        groupNumber = getD3AttributeValueFromConfig(node, d3NetworksNodeConfigHolder.programAttributes.group);

        d3GroupsResultsTable.clear();
        groupTableLoader = [];
        d3NetworkSvg.selectAll("circle").each(function(d, i) {
            if (getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.group) == groupNumber) {
                var tempGroupStructure = {};
                tempGroupStructure.memberTitle = d.label;
                tempGroupStructure.memberType = d.attributes.type;
                tempGroupStructure.memberIndex = d.index;
                groupTableLoader.push(tempGroupStructure);
            }
        });
        d3GroupsResultsTable.rows.add(groupTableLoader);
        d3GroupsResultsTable.draw();

        $('#nodeGroupList tbody').off('click');

        $('#nodeGroupList tbody').on('click', 'tr', function() {
            var data = d3GroupsResultsTable.row(this).data();

            d3NetworkSvg.selectAll("circle").each(function(d2, i) {

                if (data.memberIndex == d2.index) {
                    createInfoMasthead(d2, false, bamConfigJson.bamMoreInfoPanel, false);

                    makeConnectedNodesTable(d2, d3NetworksConnectionsResultsTable);
                    highlightNodeGroup(activeGroup, d3NetworkSvg, false);
                    zoomToD3Selection(d2);
                }
            });
        });


        $('#nodeGroupList tbody').on('mouseenter', 'tr', function() {
            var data = d3GroupsResultsTable.row(this).data();
            d3NetworkSvg.selectAll("circle").each(function(d2, i) {

                if (data.memberIndex == d2.index) {
                    styleD3Highlight(node, d2);
                }
            });
        });

    }

    //sets up and displays the results section (generally the right) when a node is selected
    function createInfoMasthead(d, prop, domLocation, connectedToggle) {

        activeNode = d;
        activeGroup = getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.group);
        //run the group creator as well
        populateGroupResultsTable(d);

        if (connectedToggle == true) {
            connectedNodes(d);
        }
        if (prop == true) {
            // the stop is necessary - see http://stackoverflow.com/questions/22941796/attaching-onclick-event-to-d3-chart-background  
            d3.event.stopPropagation();
        }
        //set html in side panel
        var headlineHtml = '';

        if (getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.image)) {
            headlineHtml = headlineHtml + '<img src="' + getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.image) + '" class="right-title-image" alt="nodeImage">';

        } else {
            headlineHtml = headlineHtml + '<img src="' + d3NetworksNodeConfigHolder.imageDefault + '" class="right-title-image" alt="image_default">';
        }

        headlineHtml = headlineHtml + '<br /><b>' + getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.label) + '</b><br/>';

        if (getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.link)) {
            headlineHtml = headlineHtml + '<br /><a href="' + getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.link) + '" target="_blank">' + getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.programAttributes.link) + '</a><br /><br />';
        }
        //add a break if there is no link
        else {
            headlineHtml = headlineHtml + '<br/>';
        }
        //domLocation.headlineID $('#' + id)
        $('#' + domLocation.headlineID).html(headlineHtml);

        if (d3NetworksNodeConfigHolder.moreInformationDisplayAttributes) {
            resultsPanelHtmlMaker(d, d3NetworksNodeConfigHolder.moreInformationDisplayAttributes, domLocation.nodeInfoID);
        }

        if (d3NetworksNodeConfigHolder.networkStatisticsDisplayAttributes) {
            resultsPanelHtmlMaker(d, d3NetworksNodeConfigHolder.networkStatisticsDisplayAttributes, domLocation.networkInfoID);
        }
    }

    function connectedNodeListMaker(dictionary, node) {
        var tempLinkStructure = {};
        tempLinkStructure.connectionTitle = node.label;
        tempLinkStructure.connectionIndex = node.index;
        dictionary.push(tempLinkStructure);
    }

    function makeConnectedNodesTable(d, table) {
        var linkStructureHolder = [];
        table.clear();

        d3NetworkSvg.selectAll("line").each(function(d2, i) {
            //expanded from the example to add more functionality
            if (d.index == d2.source.index) {
                connectedNodeListMaker(linkStructureHolder, d2.target);
            } else if (d.index == d2.target.index) {
                connectedNodeListMaker(linkStructureHolder, d2.source);
            }
        });

        if (linkStructureHolder.length > 0) {
            table.rows.add(linkStructureHolder);
        }
        table.draw();
    }

    //determines which nodes are connected to each other
    function connectedNodes(d) {

        //clear the table so we can add new data
        d3NetworksConnectionsResultsTable.clear();

        var connectedList = [];
        var linkStructureHolder = [];

        if (toggle == 0) {
            //Reduce the opacity of all but the neighhboring nodes
            node.style("opacity", function(o) {
                if (neighboring(d, o) == 1 || neighboring(o, d) == 1) {
                    // we do not want to list a self-connection
                    if (o != d) {
                        //NEED TO MAKE THIS CONFIGURABLE!!!
                        var connectedListHolder = [];
                        connectedListHolder.push(o.attributes.name);
                        connectedListHolder.push(o.index);
                        connectedList.push(connectedListHolder);
                    }
                    return 1;
                } else {
                    return .1;
                }
            });

            link.style("opacity", function(o) {
                //expanded from the example to add more functionality
                if (d.index == o.source.index) {
                    connectedNodeListMaker(linkStructureHolder, o.target);
                    return 1;
                } else if (d.index == o.target.index) {
                    connectedNodeListMaker(linkStructureHolder, o.source);
                    return 1;
                } else {
                    return .1;
                }
            });

            if (linkStructureHolder.length > 0) {
                d3NetworksConnectionsResultsTable.rows.add(linkStructureHolder);
            }

            d3NetworksConnectionsResultsTable.draw();

            //unbind the table before we reconstruct the bindings - this was adding issues earlier
            $('#' + d3NetworksNodeConfigHolder.connectionResultsLocation + ' tbody').off('click');

            $('#' + d3NetworksNodeConfigHolder.connectionResultsLocation + ' tbody').on('click', 'tr', function() {
                var data = d3NetworksConnectionsResultsTable.row(this).data();
                if (data.connectionIndex != d.index) {
                    buttonIndex = data.connectionIndex;
                } else {
                    buttonIndex = data.connectionIndex;

                }
                d3NetworkSvg.selectAll("circle").each(function(d2, i) {

                    if (buttonIndex == d2.index) {
                        createInfoMasthead(d2, false, bamConfigJson.bamMoreInfoPanel, true);
                        connectedNodes(d2);
                        zoomToD3Selection(d2);
                    }
                });
            });

            $('#' + d3NetworksNodeConfigHolder.connectionResultsLocation + ' tbody').on('mouseenter', 'tr', function() {
                var data = d3NetworksConnectionsResultsTable.row(this).data();
                d3NetworkSvg.selectAll("circle").each(function(d2, i) {

                    if (data.connectionIndex == d2.index) {
                        styleD3Highlight(d, d2);
                    }
                });
            });

        } else {
            //Put them back to base opacity
            returnOpacity();
        }
    }

    //puts nodes back to the "standard" opacity
    function returnOpacity() {
        node.style("opacity", 1);
        link.style("opacity", 1);
        toggle = 0;
    }

    function styleD3Highlight(d, d2) {
        //change the border to show which node is selected and which node is highlighted 
        var nodeObj;
        d.clicked = true;
        if (d2 != null) {
            nodeObj = d2;
            d2.highlight = true;
        } else {
            nodeObj = d;
            nodeObj.highlight = false;
        }
        //now select all the circles and style as needed
        d3NetworkSvg.selectAll("circle")
            .style("stroke-width", function(nodeObj) {
                if (nodeObj.highlight == true) {
                    return d3NetworksNodeConfigHolder.nodeSelectStrokeWidth;
                }
                if (nodeObj.clicked == true) {
                    return d3NetworksNodeConfigHolder.nodeSelectStrokeWidth;
                }
            })
            .style("stroke", function(nodeObj) {
                if (nodeObj.highlight == true) {
                    return d3NetworksNodeConfigHolder.nodeHoverColor;
                }
                if (nodeObj.clicked == true) {
                    return d3NetworksNodeConfigHolder.nodeSelectColor;
                }
            });
        if (d2 != null) {
            d2.highlight = false;
        }
        d.clicked = false;
    }

    //as the node can be clicked or selected in different ways, this function styles whatever selection we have
    function styleD3Selection(d) {
        //change the border to show which one is selected
        d.clicked = true;
        d3NetworkSvg.selectAll("circle")
            .style("stroke-width", function(d) {
                if (d.clicked == true) {
                    return d3NetworksNodeConfigHolder.nodeSelectStrokeWidth;
                }
            })
            .style("stroke", function(d) {
                if (d.clicked == true) {
                    return d3NetworksNodeConfigHolder.nodeSelectColor;
                }
            });
        d.clicked = false;
    }

    //zooms to a selected node - we also style it as selected
    function zoomToD3Selection(d) {
        //style selection
        // styleD3Selection(d);
        styleD3Highlight(d, null);
        if (centeredNode !== d) {
            x = d.x;
            y = d.y;
            k = 3;
            centeredNode = d;
        } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centeredNode = null;
        }

        //now move the viewport
        d3NetworkSvg.transition()
            .duration(450)
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
            .style("stroke-width", 1.5 / k + "px");
    }

    function resultsPanelHtmlMaker(d, data, domLocation) {
        var textHolder = '';
        textHolder = textHolder + createHtmlFromD3Attributes(d, data);
        textHolder = textHolder + '<br /><br />';
        $('#' + domLocation).html(textHolder);
    }

    function createHtmlFromD3Attributes(d, data) {
        var attributesHtml = '';
        for (var i = 0; i < data.length; i++) {
            attributesHtml = attributesHtml + '<br />';
            attributesHtml = attributesHtml + data[i].attributeTitle;
            attributesHtml = attributesHtml + getD3AttributeValueFromConfig(d, data[i]);
        }
        return attributesHtml;

    }

    //escape key closes the attribute pane and restores the network.
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode '27'
            returnOpacity();
        }
    });

    zoom.scaleTo(d3NetworkSvg, 1);

    //now put the node list into our search location in the main menu panel
    var mainSearchTable = $('#' + bamConfigJson.bamMainSearchPanel.panelID).DataTable({
        "bLengthChange": false,
        "pageLength": 5,
        data: d3NetworksnodeList,
        columns: [{
            title: "Name",
            className: "dtColumnHeader"
        }]
    });

    $('#' + bamConfigJson.bamMainSearchPanel.panelID + ' tbody').on('click', 'tr', function() {
        var buttonIndex = mainSearchTable.row(this).data()[1];
        d3NetworkSvg.selectAll("circle").each(function(d, i) {
            if (buttonIndex == d.index) {
                createInfoMasthead(d, false, bamConfigJson.bamMoreInfoPanel, true);
                connectedNodes(d);
                zoomToD3Selection(d);

                if (informationToggle == false) {
                    informationToggle = informationPaneToggle(informationToggle, bamConfigJson.bamMoreInfoPanel.panelID, bamConfigJson.bamMoreInfoPanel.panelToggleButton);
                }
            }
        });
    });
    //end of d3 data

    //stop the simulation after a configured time
    setTimeout(function() {
        simulation.stop();
    }, d3ConfigHolder.simulationManualTimeOut);
});


function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(d3ConfigHolder.simulationDragStartAlphaTarget).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(d3ConfigHolder.simulationDragEndAlphaTarget);
    d.fx = null;
    d.fy = null;
}

function zoomed() {
    d3NetworkSvg.attr("transform", d3.event.transform);
}