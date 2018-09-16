//This config file (json formatted) that sets all the variables in BAM. Each module needs its own config file, but they can share commonalities if desired 
//It is presented as a js file for easy integration / execution, and robust comments 
var bamConfigJson = {
    //set the config version. This is almost certainly different from the code base version number, as it represents the expected version of the CONFIG FILE, not the code. This way if there is a huge change to the config file we will need a new config version
    "configVersion": 1,
    //this sets the application title, favicon, license, and other non programatic information
    "bamBaseInfo": {
        "pageTitle": "BAM Basic Config",
        "favIocn": "images/favicon.ico",
        //html for the license and image. We default to cc by 4.0, and highly suggest you do the same
        "applicationLicenseHtml": "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\"><img width=\"80px\" alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg\"/></a>",
        "projectGitHubLocation": "https://github.com/Big-Ancient-Mediterranean"
    },
    //the navigation panel of BAM. This is generally on the left side, and contains a splash image, project title, and launches the various panels
    "bamNavigationPanel": {
        //tells the program what ID the main navigation lives under. Set this to the ID you create in the index file.
        "panelID": "left-side-panel",
        "splashImage": "<a href=\"https://github.com/Big-Ancient-Mediterranean\" target=\"_blank\"> <img src=\"../imagesBAM-icon.svg\" title=\"BAM logo\" alt=\"BAM logo\"></a>",
        "panelTitle": "<br />100 Topics of Interest",
        //need to move these
        "NavButtons": {
            "appinfo": "<button id=\"infoButton\" class=\"accordion\"><img src=\"images/info.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Application Information</button>",
            "databaseButton": "<button id=\"mapDatabaseButton\" class=\"accordion\"><img src=\"images/list.svg\" class=\"accordianImage\" alt=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Full Database</button>"
        }
    },
    "bamMainSearchPanel":{
    	"panelID": "nameSearch",
    },
    
    //the further information panel of BAM. This is generally on the right side, and contains number of possible things depending on the application
    "bamMoreInfoPanel": {
        //tells the program what ID the main navigation lives under. Set this to the ID you create in the index file.
        "panelID": "right-side-panel",
        "headlineID": "right-side-headline",
        "nodeInfoID": "right-side-text-main",
        "networkInfoID": "right-side-text-net",
        "panelToggleButton": "right-btn-slide-toggle"
    },
    //configure the map. Comment out if there is no map in the module
    "bamMapConfig": {
        "MapDisplaySizeAttribute": "count",
        "MapDisplaySizeAttributeDivider": 3,
        "MapSetViewX": 41.09591,
        "MapSetViewY": 10.7666,
        "MapSetViewZoom": 5
    },
    //used to specify the color pallet. This is mostly for word clouds and other such representations
    "bamColorPalette":[
    	'#493829',
    	'#816c5b',
    	'#613318',
    	'#855723',
    	'#8f3b1b',
    	'#4e6172',
    	'#991e00'

    ],
    //configure the D3 elements of BAM. This example is based on Gephi output
    "bamD3Config": {
        "sourceData": "data/graph.json",
        "sourceDataType": "gephi",
        "chartDiv": "d3MainChart",
        "svgZoomMinFactor": 0.2,
        "svgZoomMaxFactor": 10,
        "simulationIterations": 2,
        "simulationChargeStrength": -10,
        "simulationDistanceMax": 300,
        "simulationVerticalStrength": 0.018,
        "simulationHorizontalStrength": 0.006,
        "simulationManualTimeOut": 10000,
        "simulationDragStartAlphaTarget": 0.3,
        "simulationDragEndAlphaTarget": 0,
        "nodesConfig": {
            "element": "nodes",
            "nodeMinSize": 3,
            "nodeMaxSize": 25,
            "nodeMaxSpace": 3,
            "nodeSizeDivider": 3,
            "nodeSelectColor": "red",
            "nodeSelectStrokeWidth": 3.5,
            "nodeHoverColor": "blue",
            "nodeHoverStrokeWidth": 3.5,
            "programAttributes": {
                "image": {
                    "holder": "attributes",
                    "attribute": "image"
                },
                "label": {
                    "holder": "attributes",
                    "attribute": "title"
                },
                "color": {
                    "holder": "",
                    "attribute": "color"
                },
                "link": {
                    "holder": "attributes",
                    "attribute": "link"
                },
                "group": {
                    "holder": "attributes",
                    "attribute": "Modularity Class"
                },
            },
            "toolTipTitle": {
                "holder": "",
                "attribute": "label",
                "link": false,
                "image": false
            },
            "toolTipAttributes": [{
                    "holder": "attributes",
                    "attribute": "type",
                    "attributeTitle": "Category: ",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "Degree",
                    "attributeTitle": "Number of Connections: ",
                    "link": false,
                    "image": false
                }
            ],
            "toolTipOpacity": 0.9,
            "moreInformationDisplayAttributes": [{
                    "holder": "attributes",
                    "attribute": "type",
                    "attributeTitle": "Category:&nbsp;&nbsp;",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "type",
                    "attributeTitle": "Category2:&nbsp;&nbsp;",
                    "link": false,
                    "image": false
                }
            ],
            "groupSelectorAttributes": [{
                "holder": "attributes",
                "attribute": "Modularity Class",
                "attributeTitle": "Group Number",
                "link": false,
                "image": false,
                "primaryColor": true
            }],
            "groupListLocation": "groupSelectDropDown",
            "groupTableLocation": "groupSearchTable",
            "groupTableColumns": [{
                    "data": "number",
                    "title": "Group Number"
                },
                {
                    "data": "color",
                    "title": "Group Color",
                    "orderable": false

                }
            ],
            "groupResultsColumns": [{
                    "data": "memberTitle",
                    "title": "Group Member",
                    "width": "50%"
                },
                {
                    "data": "memberType",
                    "title": "Member Type",
                    "width": "50%"
                },
                {
                    "data": "memberIndex",
                    "title": "Member Index (Program use)",
                    "visible": false
                }
            ],
            "groupResultsTableLocation": "nodeGroupList",
            "networkStatisticsDisplayAttributes": [{
                    "holder": "attributes",
                    "attribute": "Modularity Class",
                    "attributeTitle": "Group Number:&nbsp;&nbsp;",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "In-Degree",
                    "attributeTitle": "Incoming Connections:&nbsp;&nbsp;",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "Degree",
                    "attributeTitle": "Total Connections:&nbsp;&nbsp;",
                    "link": false,
                    "image": false
                }
            ],
            "nodeTableColumns": [
            	{
                    "data": "label",
                    "title": "Name",
                    "bamAttributes": {
                        "holder": "attributes",
                        "attribute": "title",
                        "link": false,
                        "image": false
                    }
                },
                {
                    "data": "group",
                    "title": "Group",
                    "bamAttributes": {
                        "holder": "attributes",
                        "attribute": "Modularity Class",
                        "link": false,
                        "image": false
                    }
                },
                {
                    "data": "degree",
                    "title": "Number of <br />Connections",
                    "bamAttributes": {
                        "holder": "attributes",
                        "attribute": "Degree",
                        "link": false,
                        "image": false
                    }
                },
                
                	{
                    "data": "type",
                    "title": "Category",
                    "bamAttributes": {
                        "holder": "attributes",
                        "attribute": "type",
                        "link": false,
                        "image": false
                    }
                },
                {
                    "data": "index",
                    "title": "Index (Program Use)",
                    "visible": false,
                    "bamAttributes": {
                        "holder": "",
                        "attribute": "index",
                        "link": false,
                        "image": false
                    }
                }
            ],
            "nodeTableLocation": "databaseFullList",
            "connectionTableColumns": [{
                    "data": "sourceTitle",
                    "title": "Source",
                    "width": "33%"
                },
                {
                    "data": "sourceIndex",
                    "visible": false,
                    "className": "bamIndexHolder"
                },
                {
                    "data": "targetTitle",
                    "title": "Target",
                    "width": "33%"
                },
                {
                    "data": "targetIndex",
                    "visible": false,
                    "className": "bamIndexHolder"
                }
            ],
            "connectionTableLocation": "connectionsFullList",
            "connectionResultsColumns": [{
                    "data": "connectionTitle",
                    "title": "Connections",
                    "width": "33%"
                },
                {
                    "data": "connectionIndex",
                    "visible": false
                }
            ],
            "connectionResultsLocation": "right-side-text-connected-list",
            "imageDefault": "images/Loc-BookLogo.svg",
            "cloudAttributes": [{
                    "holder": "attributes",
                    "attribute": "In-Degree",
                    "attributeTitle": "Incoming Connections",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "Eigenvector Centrality",
                    "attributeTitle": "Eigenvector Centrality",
                    "link": false,
                    "image": false
                }
            ],
            "cloudCount": 100,
            
        },
        "linksConfig": {
            "element": "links",
            "strokeWidth": 2
        }
    }
};