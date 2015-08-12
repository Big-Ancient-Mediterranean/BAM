/***********************************************************************************/
/***********************************************************************************/
// (c) 2013 Ryan Horne, Ancient World Mapping Center
// Title: a_la_carte_framework_functions.js
// Purpose: Contains the functions used with a-la-carte 3.0 framework
//			All functions which can be reused should go in this file
// Author(s): Ryan Horne
// Version: 1.0 30 August 2013
// Released under GPLv2
/***********************************************************************************/
/***********************************************************************************/


/***********************************************************************************/
// Functions
/***********************************************************************************/


function addNewGeoJsonFeatureWithId(pid, vlayer)
{
	var dataStringForFeature ='pid=' +pid;
	getGeoJsonMarkers(dataStringForFeature, vlayer, -999);
		
}

function callback(feature, latlng){

//here need another function to return the correct icon    
//also going to setup all the texts to be used later when the internal divs are switched
var iconForVector = carteVectorStyler(feature);
    marker = L.marker(latlng, { draggable: true, icon: iconForVector});
        if (feature.properties) { 
        /*A small inline style here because the title can get jammed. Also using double classes to have a consistent style*/
       
       var title = feature.properties.title;
       
       marker.popupPreambleText ='<p><center><h1 style="line-height:150%;"><b>'+ feature.properties.title + '</b></h1>' +
       '<h3>(' + feature.properties.featuretypes +')</h3></center>'; 
    
               marker.popupTableText = 
                '<center><table>' +
                //'<td><div id="popupHome" class="popupBaseButton popupHomeButton" title="Home"></div></td>'+
                '<td><div id="popupZoomIn" class="popupBaseButton popupZoomButton" title="Zoom to feature"></div></td>'+
                '<td><div id="popupInformation" class="popupBaseButton popupInformationButton" title="Feature information"></div></td>'+
       			'<td><div id="popupPleiades" class="popupBaseButton popupPleiadesButton" title="'+ title + ' at Pleaides"></div></td>'+
       			'<td><div id="popupAWMC" class="popupBaseButton popupAwmcButton" title="'+ title + ' at the AWMC API"></div></td>'+ 
       			'<td><div id="popupPelagios" class="popupBaseButton popupPelagiosButton" title="'+ title + ' at Pelagios"></div></td>'+ 
                '<td><div id="popupEditControl" class="popupBaseButton popupEditButton" title="Edit feature"></div></td>' +
                '<td><div id="popupDeleteControl" class="popupBaseButton popupDeleteButton" title="Delete feature"></div></td></table></center>';
       
       
       
       marker.popupHomeText ='<div id="popupHomeTextDiv"<br /><h3>'+ feature.properties.description + '</h3></div>';
        
        
        marker.popupInformationText ='<div id="popupInformationTextDiv"><h2><center>More Information</center></h2>' +
        '<h4>Feature Type: </h4>' +feature.properties.featuretypes + '<br />' +
        '<h4>Time Periods: </h4>' +feature.properties.timeperiods + 
        '</div>';


var finalPopupText = marker.popupPreambleText + marker.popupHomeText + marker.popupTableText;

        
       
       marker.bindPopup(finalPopupText).openPopup();
    }

    
    
    return marker; 
}  


function getGeoJsonMarkers(dataStringForFeature, geojsonLayer, phpString){
var dataStringForFeatureFinal;
if(phpString < -1){
dataStringForFeatureFinal = dataStringForFeature}
else {
dataStringForFeatureFinal = 'pid=' + phpString;
}

		$.ajax({
						dataType: "json",
						type:'GET',
						data:dataStringForFeatureFinal,
						url:'a_la_carte_framework_feature_return.php',
						success:function(dataJson) {
							for (var i = 0; i < dataJson.features.length; i++){
							var untransformed_feature = geojson_format.read(dataJson, "FeatureCollection");
							//for some reason this is going into an array. Going to hardcode for now
					//		var transformFeature = new OpenLayers.Feature.Vector(untransformed_feature[0].geometry.transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:900913")));
							for (var j = 0; j < dataJson.features.length; j++){
							if (featuresOnMap.indexOf(untransformed_feature[j].attributes.pid) < 0){

							
							
							           geojsonLayer.addFeatures(untransformed_feature[j]);
							           featuresOnMap.push(untransformed_feature[j].attributes.pid);
}
}
							//	geojsonLayer.addData(dataJson);
							//	featuresOnMap.push(dataJson.features[i].properties.pid);
							}
						},
						error: function (xhr, ajaxOptions, thrownError) {
							alert(xhr.responseText);
						}
					});

//alert(Object.keys(geojsonLayer._layers).length);




}


/* Get the rows which are currently selected */

function fnGetSelected( oTableLocal )
{
	var aReturn = new Array();
	var aTrs = oTableLocal.fnGetNodes();
	
	for ( var i=0 ; i<aTrs.length ; i++ )
	{
		if ( $(aTrs[i]).hasClass('row_selected') )
		{
			aReturn.push( aTrs[i] );
		}
	}
	return aReturn;
}


/***********************************************************************************/