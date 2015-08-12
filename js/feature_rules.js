/***********************************************************************************/
/***********************************************************************************/
/***********************************************************************************/
// (c) 2012 Ryan Horne, Ancient World Mapping Center
// Title: feature_rules.js
// Purpose: Contains the rule set for the a-la-carte mapping application
// Author(s): Ryan Horne
// Version: 3.0 30 April 2013
// Released under GPLv2
/***********************************************************************************/
/***********************************************************************************/
/***********************************************************************************/

/***********************************************************************************/
/******* Global Variables **********************************************************/
/***********************************************************************************/

//rules stores everything
var rules = [];
//legendRules stores only the rules that we want to appear in the legend
var legendRules = [];
//for polygons
var areaRules = [];
//for line work
var lineRules = [];

/***********************************************************************************/


/***********************************************************************************/
/******* Rules for Pleiades Features ***********************************************/
/***********************************************************************************/



var aqueductRule = new OpenLayers.Rule({
	title: "Aqueduct",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'aqueduct'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(aqueductRule);
//legendRules.push(oneRule);


var aqueductGroupRule = new OpenLayers.Rule({
	title: "aqueduct-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'aqueduct-group'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(aqueductGroupRule);
//legendRules.push(oneRule);

var bathRule = new OpenLayers.Rule({
	title: "Bath",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bath'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/bath.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bathRule);
legendRules.push(bathRule);

/*
var bathLotsRule = new OpenLayers.Rule({
	title: "bath, settlement, temple, church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bath, settlement, temple, church'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bathLotsRule);
//legendRules.push(oneRule);
*/

/*

var bathUnRule = new OpenLayers.Rule({
	title: "bath, settlement, temple, church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bath, unlabeled'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/bath.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bathUnRule);
//legendRules.push(oneRule);

*/


var boundaryRule = new OpenLayers.Rule({
	title: "boundary",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'boundary'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(boundaryRule);
//legendRules.push(oneRule);

var bridgeGroupRule = new OpenLayers.Rule({
	title: "bridge-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bridge-group'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/bridge.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bridgeGroupRule);
//legendRules.push(oneRule);


var bridgeStationRule = new OpenLayers.Rule({
	title: "bridge, station",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bridge, station'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/diamond.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bridgeStationRule);
//legendRules.push(oneRule);


var bridgeRule = new OpenLayers.Rule({
	title: "Bridge",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'bridge'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/bridge.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(bridgeRule);
legendRules.push(bridgeRule);



var canalRule = new OpenLayers.Rule({
	title: "canal",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'canal'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(canalRule);
//legendRules.push(oneRule);


var capeRule = new OpenLayers.Rule({
	title: "Cape",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cape'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(capeRule);


var causewayRule = new OpenLayers.Rule({
	title: "causeway",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'causeway'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(causewayRule);
//legendRules.push(oneRule);


var cemeteryRule = new OpenLayers.Rule({
	title: "Cemetery",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cemetery'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/cemetery.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(cemeteryRule);
legendRules.push(cemeteryRule);


var cemeteryLotsRule = new OpenLayers.Rule({
	title: "cemetery, estate, production, station, villa",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cemetery, estate, production, station, villa'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/cemetery.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(cemeteryLotsRule);
//legendRules.push(oneRule);


var cemeteryTempleRule = new OpenLayers.Rule({
	title: "cemetery, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cemetery, temple'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(cemeteryTempleRule);
//legendRules.push(oneRule);


var cemeteryUnlabelRule = new OpenLayers.Rule({
	title: "cemetery, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cemetery, unlabeled'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/cemetery.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(cemeteryUnlabelRule);
//legendRules.push(oneRule);



var cemeteryVillaRule = new OpenLayers.Rule({
	title: "cemetery, villa",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'cemetery, villa'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(cemeteryVillaRule);
//legendRules.push(oneRule);


var centuriationRule = new OpenLayers.Rule({
	title: "centuriation",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'centuriation'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(centuriationRule);
//legendRules.push(oneRule);


var churchRule = new OpenLayers.Rule({
	title: "Church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'church'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/church.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(churchRule);
legendRules.push(churchRule);

/*
var churchLotsRule = new OpenLayers.Rule({
	title: "church, settlement, temple, fort, mosque",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'church, settlement, temple, fort, mosque'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(churchLotsRule);
//legendRules.push(churchRule);
*/

var churchUnRule = new OpenLayers.Rule({
	title: "church, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'church, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/church.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(churchUnRule);
//legendRules.push(churchRule);


var coastRule = new OpenLayers.Rule({
	title: "coast",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'coast'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(coastRule);
//legendRules.push(churchRule);


var coastChangeRule = new OpenLayers.Rule({
	title: "coastal-change",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'coastal-change'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(coastChangeRule);
//legendRules.push(churchRule);

var damRule = new OpenLayers.Rule({
	title: "Dam",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'dam'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(damRule);
legendRules.push(damRule);


var damFeatureRule = new OpenLayers.Rule({
	title: "dam, feature",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'dam, feature'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(damFeatureRule);
//legendRules.push(damRule);

var damResRule = new OpenLayers.Rule({
	title: "dam, reservoir",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'dam, reservoir'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(damResRule);
//legendRules.push(damRule);


var dikeRule = new OpenLayers.Rule({
	title: "dike",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'dike'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(dikeRule);
//legendRules.push(damRule);

var dikeGroupRule = new OpenLayers.Rule({
	title: "dike-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'dike-group'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(dikeGroupRule);
//legendRules.push(damRule);


var earthworksRule = new OpenLayers.Rule({
	title: "earthworks",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'earthworks'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(earthworksRule);
//legendRules.push(damRule);

var estateRule = new OpenLayers.Rule({
	title: "estate",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'estate'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(estateRule);
//legendRules.push(damRule);


var estuaryRule = new OpenLayers.Rule({
	title: "estuary",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'estuary'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(estuaryRule);
//legendRules.push(damRule);


var falseRule = new OpenLayers.Rule({
	title: "false",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'false'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(falseRule);
//legendRules.push(damRule);


var falseTopoRule = new OpenLayers.Rule({
	title: "false toponym",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'false toponym'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(falseTopoRule);
//legendRules.push(damRule);


var featureDispRule = new OpenLayers.Rule({
	title: "feature",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureDispRule);
//legendRules.push(damRule);


var featureChurchRule = new OpenLayers.Rule({
	title: "feature, church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature, church'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/church.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureChurchRule);
//legendRules.push(damRule);


var featureFortRule = new OpenLayers.Rule({
	title: "feature, fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature, fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureFortRule);
//legendRules.push(damRule);


var featureMineRule = new OpenLayers.Rule({
	title: "feature, mine",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature, mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureMineRule);
//legendRules.push(damRule);


var featureTumulusRule = new OpenLayers.Rule({
	title: "feature, tumulus",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature, tumulus'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/tumulus.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureTumulusRule);
//legendRules.push(damRule);


var featureVillaRule = new OpenLayers.Rule({
	title: "feature, villa",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'feature, villa'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(featureVillaRule);
//legendRules.push(damRule);


var findspotRule = new OpenLayers.Rule({
	title: "findspot",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'findspot'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(findspotRule);
//legendRules.push(damRule);


var findspotRule = new OpenLayers.Rule({
	title: "findspot",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'findspot'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(findspotRule);
//legendRules.push(damRule);



var fortRule = new OpenLayers.Rule({
	title: "Fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',
		pointRadius: 2, 
		strokeWidth: 1
		}
	});
	
rules.push(fortRule);
legendRules.push(fortRule);


var fortGroupRule = new OpenLayers.Rule({
	title: "fort-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort-group'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortGroupRule);
//legendRules.push(damRule);


var fortProductionRule = new OpenLayers.Rule({
	title: "fort, production",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, production'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortProductionRule);
//legendRules.push(damRule);


/*
var fortSettlementRule = new OpenLayers.Rule({
	title: "fort, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortSettlementRule);
//legendRules.push(damRule);
*/

/*

var fortLotsRule = new OpenLayers.Rule({
	title: "fort, settlement, temple, urban",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, settlement, temple, urban'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortLotsRule);
//legendRules.push(damRule);
*/


var fortStationRule = new OpenLayers.Rule({
	title: "fort, station",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, station'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortStationRule);
//legendRules.push(damRule);

/*
var fortTempleSettlementRule = new OpenLayers.Rule({
	title: "fort, temple, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, temple, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortTempleSettlementRule);
//legendRules.push(damRule);

*/


var fortUnlabeledRule = new OpenLayers.Rule({
	title: "fort, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'fort, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(fortUnlabeledRule);
//legendRules.push(damRule);


var hillfortRule = new OpenLayers.Rule({
	title: "hillfort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'hillfort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(hillfortRule);
//legendRules.push(damRule);



var hillfortRule = new OpenLayers.Rule({
	title: "hillfort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'hillfort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/square.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(hillfortRule);
//legendRules.push(damRule);


var islandRule = new OpenLayers.Rule({
	title: "Island",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'island'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(islandRule);


var islandGroupRule = new OpenLayers.Rule({
	title: "island-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'island-group'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(islandGroupRule);


var islandRegionRule = new OpenLayers.Rule({
	title: "island, region",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'island, region'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(islandRegionRule);

/*
var islandSettlementFortRule = new OpenLayers.Rule({
	title: "island, settlement, fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'island, settlement, fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
	rules.push(islandSettlementFortRule);
//legendRules.push(damRule);
	
*/	
	

var islandTempleRule = new OpenLayers.Rule({
	title: "island, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'island, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(islandTempleRule);
//legendRules.push(damRule);




var lfeaturesRule = new OpenLayers.Rule({
	title: "Labeled Feature",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'labeled feature'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1 /*, 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 5,
		fontFamily: "Times New Roman"*/
	}
	});
	
rules.push(lfeaturesRule);


var lakeRule = new OpenLayers.Rule({
	title: "Lake",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'lake'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "darkcyan", 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});
	
rules.push(lakeRule);
areaRules.push(lakeRule);


var leveeRule = new OpenLayers.Rule({
	title: "levee",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'levee'
	}),
		symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/dam.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(leveeRule);
//legendRules.push(oneRule);


var lighthouseRule = new OpenLayers.Rule({
	title: "Lighthouse",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'lighthouse'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/lighthouse.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(lighthouseRule);
legendRules.push(lighthouseRule);


var mineRule = new OpenLayers.Rule({
	title: "Mine",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(mineRule);
legendRules.push(mineRule);


var mineQuarryGroupRule = new OpenLayers.Rule({
	title: "mine, quarry-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mine, quarry-group'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(mineQuarryGroupRule);
//legendRules.push(mineRule);

var mineRegionRule = new OpenLayers.Rule({
	title: "mine, region",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mine, region'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(mineRegionRule);
//legendRules.push(mineRule);

/*
var mineSettlementRule = new OpenLayers.Rule({
	title: "mine, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mine, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(mineSettlementRule);
//legendRules.push(mineRule);
*/

var mineUnlabeledRule = new OpenLayers.Rule({
	title: "mine, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mine, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(mineUnlabeledRule);
//legendRules.push(mineRule);


var moleRule = new OpenLayers.Rule({
	title: "mole",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mole'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(moleRule);
//legendRules.push(mineRule);


var monRule = new OpenLayers.Rule({
	title: "Monastery",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'monastery'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/monastery.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(monRule);
legendRules.push(monRule);


var monumentRule = new OpenLayers.Rule({
	title: "monument",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'monument'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',
		pointRadius: 2.5,
		strokeWidth: 1
		}
	});
	
rules.push(monumentRule);
//legendRules.push(monRule);


var mountRule = new OpenLayers.Rule({
	title: "Mountain",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'mountain'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mount.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(mountRule);
legendRules.push(mountRule);


var numberedFeatureRule = new OpenLayers.Rule({
	title: "numbered feature",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'numbered feature'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',
		pointRadius: 2.5,
		strokeWidth: 1
		}
	});
	
rules.push(numberedFeatureRule);
//legendRules.push(mountRule);


var numberedFeatureTumulusRule = new OpenLayers.Rule({
	title: "numbered feature, tumulus",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'numbered feature, tumulus'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/tumulus.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(numberedFeatureTumulusRule);
//legendRules.push(mountRule);

var oasisRule = new OpenLayers.Rule({
	title: "Oasis",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'oasis'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/oasis.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(oasisRule);
legendRules.push(oasisRule);


var oasisFeatureRule = new OpenLayers.Rule({
	title: "oasisFeatureRule",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'oasisFeatureRule'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/oasis.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(oasisFeatureRule);
//legendRules.push(oasisRule);


var oasisValleyRule = new OpenLayers.Rule({
	title: "oasis, valley",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'oasis, valley'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/oasis.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(oasisValleyRule);
//legendRules.push(oasisRule);



var passRule = new OpenLayers.Rule({
	title: "Pass",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'pass'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/pass.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(passRule);
legendRules.push(passRule);


var peopleRule = new OpenLayers.Rule({
	title: "people",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'people'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});

rules.push(peopleRule);
//legendRules.push(passRule);


var placeRule = new OpenLayers.Rule({
	title: "place",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'place'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});

rules.push(placeRule);
//legendRules.push(passRule);



var productionRule = new OpenLayers.Rule({
	title: "Production",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'production'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/production.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(productionRule);
legendRules.push(productionRule);


var provRule = new OpenLayers.Rule({
	title: "Province",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'province'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontColor: "magenta", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 5,
		fontFamily: "Times New Roman"
	}
	});

rules.push(provRule);





var quarryRule = new OpenLayers.Rule({
	title: "quarry",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'quarry'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(quarryRule);
//legendRules.push(productionRule);


var quarryGroupRule = new OpenLayers.Rule({
	title: "quarry-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'quarry-group'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(quarryGroupRule);
//legendRules.push(productionRule);



var regionRule = new OpenLayers.Rule({
	title: "Region",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'region'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 5,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(regionRule);


var regionMineRule = new OpenLayers.Rule({
	title: "region, mine-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'region, mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});

rules.push(regionMineRule);
//legendRules.push(productionRule);



var regionPeopleRule = new OpenLayers.Rule({
	title: "region, people",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'region, people'
	}),
	symbolizer:{  
		pointRadius: 0, 
		strokeWidth: 0, 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 5,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(regionRule);

/*
var regionSettlementFortRule = new OpenLayers.Rule({
	title: "region, settlement, fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'region, settlement, fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(regionSettlementFortRule);
//legendRules.push(productionRule);
*/


var reservoirRule = new OpenLayers.Rule({
	title: "reservoir",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'reservoir'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});

rules.push(reservoirRule);
//legendRules.push(productionRule);



var riverRule = new OpenLayers.Rule({
	title: "River",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'river'
	}),
	symbolizer:{
		pointRadius: 0, 
		strokeWidth: 1,
				strokeColor: '#0070FF', 
		fontColor: "darkcyan", 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(riverRule);
lineRules.push(riverRule);


var roadRule = new OpenLayers.Rule({
	title: "Roads",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'road'
	}),
	symbolizer:{
		pointRadius: 0, 
		strokeWidth: 1,
				strokeColor: '#C22020' /*, 
		fontColor: "black", 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"*/
	}
	});
	
rules.push(roadRule);
lineRules.push(roadRule);


var roadStationRule = new OpenLayers.Rule({
	title: "road-station",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'road-station'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/diamond.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});

rules.push(roadStationRule);
//legendRules.push(productionRule);


	
var SaltRule = new OpenLayers.Rule({
	title: "Salt-Pans",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'salt-pans'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/salt.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(SaltRule);
legendRules.push(SaltRule);





var settlementRule2 = new OpenLayers.Rule({
	title: "Settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement,'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementRule2);


var settlementRule3 = new OpenLayers.Rule({
	title: "Settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: ',settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementRule3);

/*
var settlementBathRule = new OpenLayers.Rule({
	title: "settlement, bath",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, bath'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementBathRule);
//legendRules.push(settleRule);
*/

/*
var settlementBridgeRule = new OpenLayers.Rule({
	title: "settlement, bridge",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, bridge'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementBridgeRule);
//legendRules.push(settleRule);
*/
/*
var settlementCaveRule = new OpenLayers.Rule({
	title: "settlement, cave",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, cave'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementCaveRule);
//legendRules.push(settleRule);

*/

/*
var settlementCemeteryTempleRule = new OpenLayers.Rule({
	title: "settlement, cemetery, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, cemetery, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementCemeteryTempleRule);
//legendRules.push(settleRule);


var settlementChurchCemeteryRule = new OpenLayers.Rule({
	title: "settlement, church, cemetery",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, church, cemetery'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementChurchCemeteryRule);
//legendRules.push(settleRule);


var settlementEstateRule = new OpenLayers.Rule({
	title: "settlement, estate",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, estate'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementEstateRule);
//legendRules.push(settleRule);


var settlementFeatureRule = new OpenLayers.Rule({
	title: "settlement, feature",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, feature'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementFeatureRule);
//legendRules.push(settleRule);


var settlementFortRule = new OpenLayers.Rule({
	title: "settlement, fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementFortRule);
//legendRules.push(settleRule);


var settlementMineRule = new OpenLayers.Rule({
	title: "settlement, mine",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementMineRule);
//legendRules.push(settleRule);


var settlementMosquePlazaRule = new OpenLayers.Rule({
	title: "settlement, mosque, plaza",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, mosque, plaza'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementMosquePlazaRule);
//legendRules.push(settleRule);


var settlementPortRule = new OpenLayers.Rule({
	title: "settlement, port",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, port'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementPortRule);
//legendRules.push(settleRule);


var settlementPortTempleRule = new OpenLayers.Rule({
	title: "settlement, port, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, port, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementPortTempleRule);
//legendRules.push(settleRule);


var settlementTempleRule = new OpenLayers.Rule({
	title: "settlement, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementTempleRule);
//legendRules.push(settleRule);

var settlementTempleEstateRule = new OpenLayers.Rule({
	title: "settlement, temple, estate",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, temple, estate'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementTempleEstateRule);
//legendRules.push(settleRule);


var settlementUnlabeledRule = new OpenLayers.Rule({
	title: "settlement, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementUnlabeledRule);
//legendRules.push(settleRule);


var settlementUrbanRule = new OpenLayers.Rule({
	title: "settlement, urban",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, urban'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementUrbanRule);
//legendRules.push(settleRule);


var settlementVillaRule = new OpenLayers.Rule({
	title: "settlement, villa",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement, villa'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementVillaRule);
//legendRules.push(settleRule);

*/

var siteRule = new OpenLayers.Rule({
	title: "site",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'site'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',
		pointRadius: 2.5,
		strokeWidth: 1
		}
	});
	
rules.push(siteRule);
//legendRules.push(settleRule);


	
 var springRule = new OpenLayers.Rule({
	title: "Spring",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'spring'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/spring.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(springRule);
legendRules.push(springRule);


 var springAqueductRule = new OpenLayers.Rule({
	title: "spring, aqueduct",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'spring, aqueduct'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/spring.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(springAqueductRule);
//legendRules.push(springRule);


 var stationRule = new OpenLayers.Rule({
	title: "station",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/diamond.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationRule);
//legendRules.push(springRule);

 var stationChurchRule = new OpenLayers.Rule({
	title: "station, church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station, church'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/church.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationChurchRule);
//legendRules.push(springRule);

/*
 var stationLighthouseSettlementPortRule = new OpenLayers.Rule({
	title: "station, lighthouse, settlement, port",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station, lighthouse, settlement, port'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationLighthouseSettlementPortRule);
//legendRules.push(springRule);

*/
 var stationMineRule = new OpenLayers.Rule({
	title: "station, mine",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station, mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/mine.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationMineRule);
//legendRules.push(springRule);

/*
 var stationSettlementRule = new OpenLayers.Rule({
	title: "station, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationSettlementRule);
//legendRules.push(springRule);
*/

 var stationUnlabeledRule = new OpenLayers.Rule({
	title: "station, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'station, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/diamond.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(stationUnlabeledRule);
//legendRules.push(springRule);


var templeRule = new OpenLayers.Rule({
	title: "Temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeRule);
legendRules.push(templeRule);


var templeBathRule = new OpenLayers.Rule({
	title: "templeBathRule",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'templeBathRule'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeBathRule);
//legendRules.push(templeRule);


/*
var templeLotsRule = new OpenLayers.Rule({
	title: "temple, cemetery, production, settlement, settlement-modern",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, cemetery, production, settlement, settlement-modern'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeLotsRule);
//legendRules.push(templeRule);
*/


var templeChurchRule = new OpenLayers.Rule({
	title: "temple, church",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, church'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeChurchRule);
//legendRules.push(templeRule);



var templeMineRule = new OpenLayers.Rule({
	title: "temple, mine",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, mine'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeMineRule);
//legendRules.push(templeRule);


var templeMountainRule = new OpenLayers.Rule({
	title: "temple, mountain",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, mountain'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeMountainRule);
//legendRules.push(templeRule);

/*
var templeSettlementRule = new OpenLayers.Rule({
	title: "temple, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeSettlementRule);
//legendRules.push(templeRule);




var templeSettlementUrbanProductionRule = new OpenLayers.Rule({
	title: "temple, settlement, urban, production",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, settlement, urban, production'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeSettlementUrbanProductionRule);
//legendRules.push(templeRule);

*/


var templeUnlabeledRule = new OpenLayers.Rule({
	title: "temple, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeUnlabeledRule);
//legendRules.push(templeRule);


var templeWallRule = new OpenLayers.Rule({
	title: "temple, wall",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'temple, wall'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/star.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(templeWallRule);
//legendRules.push(templeRule);


var towerRule = new OpenLayers.Rule({
	title: "Tower",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'tower'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/tower.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(towerRule);
legendRules.push(towerRule);


 var tumulusRule = new OpenLayers.Rule({
	title: "Tumulus",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'tumulus'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/tumulus.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(tumulusRule);
legendRules.push(tumulusRule);

 var tumulusUnlabeledRule = new OpenLayers.Rule({
	title: "tumulus, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'tumulus, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/tumulus.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(tumulusUnlabeledRule);
//legendRules.push(tumulusRule);


 var tunnelRule = new OpenLayers.Rule({
	title: "tunnel",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'tunnel'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(tumulusUnlabeledRule);
//legendRules.push(tumulusRule);

var unRule = new OpenLayers.Rule({
	title: "Unknown",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'unknown'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1 /*, 
		fontStyle: "italic",
		fontSize: "18px",
		labelYOffset : 5,
		fontFamily: "Times New Roman"*/
		}
	});
	
rules.push(unRule);

 var unlabeledRule = new OpenLayers.Rule({
	title: "unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(unlabeledRule);
//legendRules.push(tumulusRule);


 var unlocatedRule = new OpenLayers.Rule({
	title: "unlocated",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'unlocated'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(unlocatedRule);
//legendRules.push(tumulusRule);


var unlocatedGroupRule = new OpenLayers.Rule({
	title: "unlocated-group",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'unlocated-group'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(unlocatedGroupRule);
//legendRules.push(tumulusRule);


var urbanRule = new OpenLayers.Rule({
	title: "urban",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanRule);
//legendRules.push(tumulusRule);


var urbanBathRule = new OpenLayers.Rule({
	title: "urban, bath",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, bath'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanBathRule);
//legendRules.push(tumulusRule);

/*
var urbanSettlementRule = new OpenLayers.Rule({
	title: "urban, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanSettlementRule);
//legendRules.push(tumulusRule);


var urbanSettlementFortRule = new OpenLayers.Rule({
	title: "urban, settlement, fort",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, settlement, fort'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanSettlementFortRule);
//legendRules.push(tumulusRule);


var urbanSettlementPortRule = new OpenLayers.Rule({
	title: "urban, settlement, port",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, settlement, port'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanSettlementPortRule);
//legendRules.push(tumulusRule);

*/


var urbanTempleRule = new OpenLayers.Rule({
	title: "urban, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanTempleRule);
//legendRules.push(tumulusRule);



var urbanTempleCemeteryRule = new OpenLayers.Rule({
	title: "urban, temple, cemetery",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, temple, cemetery'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanTempleCemeteryRule);
//legendRules.push(tumulusRule);



var urbanTempleCemeteryRule = new OpenLayers.Rule({
	title: "urban, temple, cemetery",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'urban, temple, cemetery'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(urbanTempleCemeteryRule);
//legendRules.push(tumulusRule);


var villaRule = new OpenLayers.Rule({
	title: "Villa",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'villa'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(villaRule);
legendRules.push(villaRule);


var villaTempleRule = new OpenLayers.Rule({
	title: "villa, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'villa, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(villaTempleRule);
//legendRules.push(villaRule);


var villaUnlabeledRule = new OpenLayers.Rule({
	title: "villa, unlabeled",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'villa, unlabeled'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/villa.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(villaUnlabeledRule);
//legendRules.push(villaRule);

/*
var villaUrbanSettlementTempleRule = new OpenLayers.Rule({
	title: "villa, urban, settlement, temple",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'villa, urban, settlement, temple'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(villaUrbanSettlementTempleRule);
//legendRules.push(villaRule);
*/

var wallsRule = new OpenLayers.Rule({
	title: "walls",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'walls'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/unknown.png',  
		pointRadius: 2.5, 
		strokeWidth: 1
		}
	});
	
rules.push(wallsRule);
//legendRules.push(villaRule);

/*
var wallFortSettlementRule = new OpenLayers.Rule({
	title: "wall, fort, settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'wall, fort, settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(wallFortSettlementRule);
//legendRules.push(villaRule);
*/

var waterRule = new OpenLayers.Rule({
	title: "water",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'water'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(waterRule);
areaRules.push(waterOpenRule);


var waterInlandRule = new OpenLayers.Rule({
	title: "water-inland",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'water-inland'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(waterInlandRule);
//areaRules.push(waterOpenRule);


var waterOpenRule = new OpenLayers.Rule({
	title: "Open Water",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'water-open'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(waterOpenRule);
areaRules.push(waterOpenRule);


var waterOpenEstuaryRule = new OpenLayers.Rule({
	title: "water-open, estuary",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'water-open, estuary'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(waterOpenEstuaryRule);
//areaRules.push(waterOpenRule);

var waterwheelRule = new OpenLayers.Rule({
	title: "Waterwheel",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'waterwheel'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/waterwheel.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(waterwheelRule);
legendRules.push(waterwheelRule);



var wellRule = new OpenLayers.Rule({
	title: "Well",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'well'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/spring.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(wellRule);


var wheelRule = new OpenLayers.Rule({
	title: "wheel",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'wheel'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/waterwheel.png',  
		pointRadius: 5, 
		strokeWidth: 1
		}
	});
	
rules.push(wheelRule);
//legendRules.push(waterwheelRule);

var whirlRule = new OpenLayers.Rule({
	title: "Whirlpool",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'whirlpool'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/spiral.png',
		pointRadius: 5,
		strokeWidth: 1
		}
	});
	
rules.push(whirlRule);
legendRules.push(whirlRule);


var settlementRule = new OpenLayers.Rule({
	title: "Settlement",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'settlement'
	}),
	symbolizer:{
		externalGraphic:'/awmc/map_data/symbols/settlement.png',
		pointRadius: 4,
		strokeWidth: 1
		}
	});
	
rules.push(settlementRule);
legendRules.push(settlementRule);


/***********************************************************************************/



/***********************************************************************************/
/******* Custom Rules **************************************************************/
/***********************************************************************************/

var hideRule = new OpenLayers.Rule({
	symbolizer:{
		pointRadius: 0, 
		strokeWidth: 0, 
		fillOpacity: 0.0, 
		strokeOpacity: 0.0 }
	});


var polyDefRule = new OpenLayers.Rule({
	title: "Basic Polygon",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'area'
	}),
	symbolizer:{
		fillColor: '#ee9900',
		fillOpacity: 0.4,
		strokeColor: '#ee9900',
		strokeOpacity: 1,
		strokeWidth: 1
		}
	});
	
rules.push(polyDefRule);
areaRules.push(polyDefRule);

 

var journeyRule = new OpenLayers.Rule({
	title: "Journey",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'journey'
	}),
	symbolizer:{
		pointRadius: 0, 
		strokeWidth: 1.3,
		strokeColor: '#ee9900', 
		strokeDashstyle: "longdash",
		fontColor: "black", 
		fontStyle: "italic",
		fontSize: "9.5px",
		labelYOffset : 1,
		fontFamily: "Times New Roman"
	}
	});
	
rules.push(journeyRule); 
lineRules.push(journeyRule);


var independentLabelRule = new OpenLayers.Rule({
	title: "Independent Label",
	filter: new OpenLayers.Filter.Comparison({
	type: OpenLayers.Filter.Comparison.LIKE,
	property: 'featuretypes',
	value: 'independent_label'
	}),
	symbolizer:{
		pointRadius: 0, 
		fontColor: "blue", 
		fontStyle: "italic",
		fontSize: "14px",
		labelYOffset : 1,
		fontFamily: "Times New Roman",
		fillColor: '#BEE8FF',
		fillOpacity: 1,
		strokeColor: '#BEE8FF',
		strokeOpacity: .9,
		strokeWidth: 1	
	}
	});

rules.push(independentLabelRule);


/***********************************************************************************/
