/***********************************************************************************/
/***********************************************************************************/
// (c) 2013 Ryan Horne, Ancient World Mapping Center
// Title: BAM-layers.js
// Purpose: Strabo layers for the transitional Strabo Program
// Author(s): Ryan Horne
// Version: 1.0 30 August 2013
// Released under GPLv2
/***********************************************************************************/
/***********************************************************************************/

/***********************************************************************************/
// Config Objects
/***********************************************************************************/



var awmcWmsUrl = "http://awmc.unc.edu/cgi-bin/mapserv?map=/awmc-stor/html/awmc/mapfiles/a-la-carte-transitional.map";

var overOptions = {
     maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
	alwaysInRange: true,
	maxResolution: "auto",
	//displayInLayerSwitcher: true,
	group: "physical",
	isBaseLayer: false,
    //projection: mapProjection,
        gutter:50
  //  tileSize: new OpenLayers.Size(200,100)
	};


 var singleTileConfig = {
     sphericalMercator: true,
     maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
	alwaysInRange: true,
	maxResolution: "auto",
	displayInLayerSwitcher: true,
	group: "culture",
	isBaseLayer: false,
   // projection: mapProjection,
    gutter:50,
    singleTile: true, 
    ratio: 1
	};
	
	
	 var pleiadesTileConfig = {
     sphericalMercator: true,
     maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
	alwaysInRange: true,
	maxResolution: "auto",
	displayInLayerSwitcher: false,
	//group: "culture",
	isBaseLayer: false,
   // projection: mapProjection,
    gutter:50,
  //  singleTile: true, 
    ratio: 1
	};


var displayLayers =[];
var baseLayers =[];

           

var all_Pleiades_Features_wms = new OpenLayers.Layer.WMS(" All Pleiades Features WMS", 
                    awmcWmsUrl,
                    {layers: "all_Pleiades_Features",transparent: 'true'},
                    pleiadesTileConfig
                    );  
                    


/* should set the max extent of these to avoid requesting 404 tiles*/

var mapBoxRoads = new OpenLayers.Layer.XYZ(
    " Roads",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.awmc-roads/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.awmc-roads/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.awmc-roads/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.awmc-roads/${z}/${x}/${y}.png"
    ], 
    {
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13,
        isBaseLayer: false
    }
);

displayLayers.push(mapBoxRoads);
mapBoxRoads.setVisibility(false);



var romanWater = new OpenLayers.Layer.XYZ(
    " Roman Era Water",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.geb605bm/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.geb605bm/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.geb605bm/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.geb605bm/${z}/${x}/${y}.png"
    ], 
    {
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13,
        isBaseLayer: false
    }
);

displayLayers.push(romanWater);


var lateWater = new OpenLayers.Layer.XYZ(
    " Late Antiquity Water",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.geb7ed50/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.geb7ed50/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.geb7ed50/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.geb7ed50/${z}/${x}/${y}.png"
    ], 
    {
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13,
        isBaseLayer: false
    }
);

displayLayers.push(lateWater);
lateWater.setVisibility(false);




//put baselayers here


var mapBoxStreetBackground = new OpenLayers.Layer.XYZ(
    " Modern Street Map",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.map-zr78g89o/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.map-zr78g89o/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.map-zr78g89o/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.map-zr78g89o/${z}/${x}/${y}.png"
    ], 
    {
        attribution: "Tiles &copy; <a href='http://mapbox.com/' target='_blank'>MapBox</a> | " + 
            "Data &copy; <a href='http://www.openstreetmap.org/' target='_blank'>OpenStreetMap</a> and contributors, CC-BY-SA |",
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13
    }
);

baseLayers.push(mapBoxStreetBackground);


var mapBoxSatelliteBackground = new OpenLayers.Layer.XYZ(
    " Modern Satellite",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.map-kj5farx3/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.map-kj5farx3/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.map-kj5farx3/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.map-kj5farx3/${z}/${x}/${y}.png"
    ], 
    {
        attribution: "Tiles &copy; <a href='http://mapbox.com/' target='_blank'>MapBox</a> | ",
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13
    }
);


baseLayers.push(mapBoxSatelliteBackground);



var coastBackground = new OpenLayers.Layer.XYZ(
    " AWMC Coast Outline",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.eoupu8fr/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.eoupu8fr/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.eoupu8fr/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.eoupu8fr/${z}/${x}/${y}.png"
    ], 
    {
        attribution: "&copy; <a href='http://awmc.unc.edu' target='_blank'>AWMC</a> | ",
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13
    }
);


baseLayers.push(coastBackground);



var urban_areas = new OpenLayers.Layer.XYZ(
    " Urban Areas",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.asafko6r/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.asafko6r/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.asafko6r/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.asafko6r/${z}/${x}/${y}.png"
    ], 
    {
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13,
        isBaseLayer: false
    }
);
            
displayLayers.push(urban_areas);
urban_areas.setVisibility(false);




var all_Pleiades_Features = new OpenLayers.Layer.XYZ(
    " All Pleiades Features",
    [
        "http://a.tiles.mapbox.com/v3/isawnyu.75cul3di/${z}/${x}/${y}.png",
        "http://b.tiles.mapbox.com/v3/isawnyu.75cul3di/${z}/${x}/${y}.png",
        "http://c.tiles.mapbox.com/v3/isawnyu.75cul3di/${z}/${x}/${y}.png",
        "http://d.tiles.mapbox.com/v3/isawnyu.75cul3di/${z}/${x}/${y}.png"
    ], 
    {
        sphericalMercator: true,
        wrapDateLine: true,
        transitionEffect: "resize",
        buffer: 1,
        numZoomLevels: 13,
        isBaseLayer: false
    }
);
            
displayLayers.push(all_Pleiades_Features);
all_Pleiades_Features.setVisibility(false);


//style map for the tbib counts

var iclStyleMap = new OpenLayers.StyleMap({
                    "default": new OpenLayers.Style({
                    fillColor: "#FFFFFF",
                    fillOpacity: 0.5,
                    strokeColor: "#000000",
                    strokeWidth: 3,
                    strokeOpacity: 0.5,
                    pointRadius: '${count}'
                     }
                     ),
                    
                          "select": new OpenLayers.Style({
            		strokeColor: "#0033ff",
           			strokeOpacity: 0.5,
                    strokeWidth: 3,
            		fillColor: "#0033ff",
                    fillOpacity: 0.5,
                    pointRadius: '${count}'
 }
                    )

                });




