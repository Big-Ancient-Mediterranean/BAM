{
    "configVersion": 1,
    "bamBaseInfo": {
        "pageTitle": "IAH Knowledge Networks",
        "favIocn": "images/unc_favicon.ico",
        "applicationLicenseHtml": "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://i.creativecommons.org/l/by/4.0/88x31.png\"/></a>",
        "projectGitHubLocation": "https://github.com/iah-unc"
    },
    "bamNavigationPanel": {
        "panelID": "left-side-panel",
        "splashImage": "<a href=\"http://iah.unc.edu/\" target=\"_blank\"> <img src=\"images/iah-logo-1.png\" title=\"IAH logo\" alt=\"IAH logo\"></a>",
        "panelTitle": "<br /><b>IAH Knowledge Network Map</b>",
        "NavButtons": {
            "appinfo": "<button id=\"infoButton\" class=\"accordion\"><img src=\"images/info.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Application Information</button>",
            "databaseButton": "<button id=\"mapDatabaseButton\" class=\"accordion\"><img src=\"images/list.svg\" class=\"accordianImage\" alt=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Full Database</button>"
        }
    },
    "bamMoreInfoPanel": {
        "panelID": "right-side-panel"
    },
    "bamMapConfig": {
        "MapDisplaySizeAttribute": "count",
        "MapDisplaySizeAttributeDivider": 3,
        "MapSetViewX": 41.09591,
        "MapSetViewY": 10.7666,
        "MapSetViewZoom": 5
    },
    "bamD3Config": {
        "sourceData": "data/bltgraph.json",
        "sourceDataType": "gephi",
        "chartDiv": "d3MainChart",
        "svgZoomMinFactor": ".2",
        "svgZoomMaxFactor": "10",
        "simulationIterations": "2",
        "nodesConfig": {
            "element": "nodes",
            "nodeMinSize": 3,
            "nodeMaxSize": 25,
            "nodeMaxSpace": 3,
            "programAttributes": {
                "image": {
                    "holder": "attributes",
                    "attribute": "image"
                },
                "label": {
                    "holder": "",
                    "attribute": "Label"
                },
                "color": {
                    "holder": "",
                    "attribute": "color"
                }
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
                    "attributeText": "Category: ",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "Degree",
                    "attributeText": "Number of Connections: ",
                    "link": false,
                    "image": false
                }
            ],
            "toolTipOpacity": 0.9,
            "moreInformationDisplayAttributes": [{
                    "holder": "attributes",
                    "attribute": "type",
                    "attributeTitle": "Category",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "type",
                    "attributeTitle": "Category",
                    "link": false,
                    "image": false
                }
            ],
            "networkStatisticsDisplayAttributes": [{
                    "holder": "attributes",
                    "attribute": "Modularity Class",
                    "attributeTitle": "Group Number",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "In-Degree",
                    "attributeTitle": "Incoming Connections",
                    "link": false,
                    "image": false
                },
                {
                    "holder": "attributes",
                    "attribute": "Degree",
                    "attributeTitle": "Total Connections",
                    "link": false,
                    "image": false
                }
            ],
            "nodeTableColumns": [{
                    "data": "label",
                    "title": "Name"
                },
                {
                    "data": "degree",
                    "title": "Degree"
                },
                {
                    "data": "index",
                    "visible": false
                }
            ],
            "connectionTableColumns": [{
                    "data": "sourceTitle",
                    "title": "Source",
                    "width": "33%"
                },
                {
                    "data": "sourceIndex",
                    "visible": false
                },
                {
                    "data": "targetTitle",
                    "title": "Target",
                    "width": "33%"
                },
                {
                    "data": "targetIndex",
                    "visible": false
                }
            ],
            "imageDefault": "images/Loc-BookLogo.svg"
        },
        "linksConfig": {
            "element": "links",
            "strokeWidth": 2
        },
        "d3MapConfig": {
            "lonAttribute": {
                "holder": "attributes",
                "attribute": "repLon",
                "attributeText": "",
                "link": false,
                "image": false
            },
            "latAttribute": {
                "holder": "attributes",
                "attribute": "repLat",
                "attributeText": "",
                "link": false,
                "image": false
            }
        }
    }
};