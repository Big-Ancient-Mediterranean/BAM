/***********************************************************************************/
/***********************************************************************************/
// (c) 2013 Ryan Horne, Ancient World Mapping Center
// Title: a-la-carte-transitional-text.js
// Purpose: Strabo texts for the transitional Strabo Program
// Author(s): Ryan Horne
// Version: 1.0 30 August 2013
// Released under GPLv2
/***********************************************************************************/
/***********************************************************************************/

/***********************************************************************************/
// Config Objects
/***********************************************************************************/

var d = new Date();
var n = d.getFullYear();


var editHtml = '<div id="editCloseBox" class="popupCloseCarte">x</div>'+
'<div id = "editContainer" class="customOverlayInterior">'+
'<div id = "editForms">' +
'<h3><center>Edit Feature Information</center></h3>' +
'<br />'+
'<fieldset class ="dividerLeft" id="editFieldSetLeft">' +
'<label for="editTitle">Title</label><br />'+
'<input type="text" name="editTitle" id="editTitle"/><br />'+
'<br /><label for="editAwmc_id">AWMC ID</label><br />' +
'<input type="text" name="editAwmc_id" id="editAwmc_id" /><br />' +
'<br /><label for="editPid">Pleiades ID</label><br />' +
'<input type="text" name="editPid" id="editPid" /><br />' +
'<br /><label for="editType">Type</label><br />' +
'<input type="text" name="editType" id="editType" /><br />' +
'<br /><label for="editDescription">Description</label><br />' +
'<textarea name="editDescription" id="editDescription" rows="10"> </textarea><br />' +
'<br />' +
'<br />' +
'<br />' +
'<button id="editFormSubmitButton" title="Submit changes">Submit</button>' +
'<button id="cancelEditsButton" onclick="$(\'#editBox\').hide();" title="Cancel Edits">Cancel</button>' +
'</fieldset>' +
'<fieldset class ="dividerLeft" id="editFieldSetCenter">' +
'<label for="editEnName">English Name</label><br />' +
'<input type="text" name="editEnName" id="editEnName" /><br />' +
'<br /><label for="editGreekName">Greek Name</label><br />' +
'<input type="text" name="editGreekName" id="editGreekName" /><br />' +
'<br /><label for="editLatinName">Latin Name</label><br />' +
'<input type="text" name="editLatinName" id="editLatinName" /><br />' +
'<br /><label for="editCustomName">Custom Name</label><br />' +
'<input type="text" name="editCustomName" id="editCustomName" /><br />' +
'</fieldset>' +
'<fieldset class ="dividerLeft" id="editFieldSetRight">' +
'<label for="editTimePeriods">Time Period(s)</label><br />' +
'<input type="text" name="editTimePeriods" id="editTimePeriods" /><br />' +
'<br /><label for="editLat">Latitude</label><br />' +
'<input type="text" name="editLat" id="editLat" /><br />' +
'<br /><label for="editLon">Longitude</label><br />' +
'<input type="text" name="editLon" id="editLon" /><br />' +
'<br /><label for="editCustomLink">Custom Link</label><br />' +
'<input type="text" name="editCustomLink" id="editCustomLink" /><br />' +
'</fieldset>' +
'<br />'+
'</div>' +
'</div>';

                    
//search functions
var searchHtml = '<div id="searchCloseBox" class="popupCloseCarte">x</div>'+
'<div id = "searchContainer" class="customOverlayInterior">'+
'<div id = searchContent><table class="display" id="mainTable" border="1"'+
' cellpadding="2" cellspacing="4" summary="Api Results Table"> <thead><tr>' +
'<th>Entity 1</th>' + 
' <th>Entity 2</th>'+
' <th>Reference</th>'+
'<th>Place</th> </tr></thead><tbody></tbody></table>'+
'</div></div>';


var gazetteerHtml = '<div id="gazetteerCloseBox" class="popupCloseCarte">x</div>'+
'<div id = "gazetteerContainer" class="customOverlayInterior">'+
'<div id = gazetteerContent><table class="display" id="gazetteerTable" border="1"'+
' cellpadding="2" cellspacing="4" summary="Api Results Table"> <thead><tr> <th>' +
'</th><th>Title</th>' + 
' <th>Description</th>'+
' <th>Type(s)</th>'+
'<th>Pleiades ID</th> </tr></thead><tbody></tbody></table>'+
'</div>';
                    
                    

var infoHtml ='<div id="aboutCloseBox" class="popupCloseCarte">x</div><center><b>Terra Biblica</b> is a tool for the geospatial analysis, literary network visualization, and plot mapping of biblical and related texts. ' +
'It is the creation of <b>Sarah Bond</b>, <b>Paul Dilley</b>, and <b>Ryan Horne</b>. '+
'Its development was made possible by the support of the <a href="http://obermann.uiowa.edu/" target ="_blank">Obermann Center</a> at the <a href="http://www.uiowa.edu/" target="_blank">University of Iowa</a>. '+
'<b>Terra Biblica</b> makes extensive use of the <a href ="http://awmc.unc.edu/wordpress/tiles/" target="_blank">AWMC Ancient World Tile Set</a>. ' +
'<br /><br />It is generously hosted by by the <a href="http://awmc.unc.edu" target="_blank">Ancient World Mapping Center</a> (AWMC) at <a href="http://www.unc.edu/index.htm" target="_blank">The University of North Carolina, Chapel Hill</a>.' +
'<br /><br />The software is developed and maintained by <b>Ryan Horne</b>, and is an extension of <a href="http://awmc.unc.edu/awmc/applications/strabo/" target="_blank">Strabo Online</a> and <a href="http://awmc.unc.edu/awmc/applications/snagg/" target="_blank">SNAGG</a>. Map data is from the AWMC, and was produced by <b>Richard Talbert, Jeffery Becker, Ryan Horne, Ray Belanger, Steve Burges, Luke Hagemann, Ashley Lee</b>, and <a href="http://awmc.unc.edu/wordpress/affiliates/" target="_blank">others</a>.' +
'<br /><br />Feature data is derived from <a href="http://pleiades.stoa.org/" target="_blank">Pleiades</a> and the elevation model is derived from <a href="http://eros.usgs.gov/#/Find_Data/Products_and_Data_Available/SRTM" target="_blank">USGS supplied SRTM data</a>.' +
' River data is derived from Vmap0, <a href="http://www.naturalearthdata.com/" target="_blank">Natural Earth</a>, and the work of the AWMC.' +
' All other landscape data is originally derived from <a href="http://webgis.wr.usgs.gov/globalgis/metadata_qr/metadata/airfields.htm" target="_blank"> Vmap0</a>'+
' and produced by the AWMC following the <i><a href="http://www.worldcat.org/oclc/43970336" target="_blank">Barrington Atlas</a></i>.<br />' +
' Map icons are partially derived from <a href="https://www.iconfinder.com/iconsets/30_Free_Black_ToolBar_Icons#readme" target="_blank">Billy Barker</a>, '+
'<a href="https://www.iconfinder.com/iconsets/flat-ui-icons-24-px#readme target="_blank">Designmodo</a>, '+
' <a href="https://www.iconfinder.com/iconsets/freecns-cumulus#readme" target="_blank">Yannick Lung</a>, '+
' <a href="http://www.sjjb.co.uk/mapicons/" target="_blank"> SJJB SVG Map Icons</a>,'+
' <a href="http://commons.wikimedia.org/wiki/Main_Page" target="_blank">Wikimedia Commons</a>,'+
' <a href="http://trac.osgeo.org/mapserver/wiki/SymbologyExchangeVector" target="_blank"> MapServer</a>,'+
' and the work of the AWMC.' +
'<br /><br /> Program icons are from <a href="https://useiconic.com/open/" target="_blank">Open Iconic</a>'+
'<br /><br /> The map is developed in <a href="http://openlayers.org/two/" target="_blank"> OpenLayers 2 </a>, and the social network was created using <a href="https://gephi.github.io/" target="_blank">Gephi</a>, with the <a href="https://marketplace.gephi.org/plugin/sigmajs-exporter/" target="_blank">Sigmajs Exporter</a> produced by the <a href="http://www.oii.ox.ac.uk/" target="_blank">Oxford Internet Institute</a>.' +
'<br /><br />All site content, map data, and maps created by the application are released under the <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank"> Creative Commons CC BY 4.0 license</a>'+
' and are completely free for non-commercial use. The underlying javascript code is released under <a href="http://www.gnu.org/licenses/gpl-2.0.html" target="_blank"> GPLv2.</a>' +
'<br /><br />© ' + n + ' Terra Biblica' + '<br /> v. 0.1 Alpha <br /><br />' +
'<br /><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a></center>';




var legendHtml = '<div id="legendCloseBox" class="popupCloseCarte">x</div>'+
'<center><h2>Map Key</h2></center>' +
'<br/> <b>Period Colors</b>:'+
'<br />'+
'Pre - 500 BC (Archaic) <HR COLOR="#30993f" style="float: right; width: 30%" /> '+
'<br />'+
'500 - 330 BC (Classical) <HR COLOR="#3e6eac" style="float: right; width: 30%" /> '+
'<br />'+
'330 - 30 BC (Hellenistic / Middle to Late Republican at Rome) <HR COLOR="#8929b3" style="float: right; width: 30%" /> '+
'<br />'+
'30 BC - AD 300 (Roman) <HR COLOR="#ff0009"  style="float: right; width: 30%" /> '+
'<br />'+
'AD 300 - 640 (Late Antiquity) <HR COLOR="#ff701f" style="float: right; width: 30%" /> '+
'<br />'+
'More than one period <HR style="float: right; width: 30%" /> '+
'<br>' +
'<br/> <b>Coastlines</b>:'+
'<br>' +
'Known <HR style="float: right; width: 30%" /> '+
'<br>' +
'Approximate <hr style="border-style: dotted; float: right; width: 30%"/>' +
'<br>' +
'<br/> <b>Point Symbols</b>:'+
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/bath.png" width="20" height="20"> - bath' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/bridge.png" width="20" height="20"> - bridge' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/villa.png" width="20" height="20"> - estate / villa' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/cemetery.png" width="20" height="20"> - cemetery' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/church.png" width="20" height="20"> - church' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/dam.png" width="20" height="20"> - dam / dike / levee' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/square.png" width="20" height="20"> - earthworks / fort / hillfort' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/lighthouse.png" width="20" height="20"> - lighthouse' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/mine.png" width="20" height="20"> - mine / quarry' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/monastery.png" width="20" height="20"> - monastery' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/mount.png" width="20" height="20"> - mountain' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/oasis.png" width="20" height="20"> - oasis' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/pass.png" width="20" height="20"> - pass' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/production.png" width="20" height="20"> - production' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/rapid.png" width="20" height="20"> - rapid' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/salt.png" width="20" height="20"> - salt-pans' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/settlement.png" width="20" height="20"> - settlement / urban' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/spring.png" width="20" height="20"> - spring / well' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/diamond.png" width="20" height="20"> - station' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/star.png" width="20" height="20"> - temple / shrine' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/tower.png" width="20" height="20"> - tower' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/tumulus.png" width="20" height="20"> - tumulus' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/waterwheel.png" width="20" height="20"> - wheel / waterwheel' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/spiral.png" width="20" height="20"> - whirlpool' +
'<br>' +
'<img src="http://awmc.unc.edu/awmc/map_data/symbols/unknown.png" width="20" height="20"> - All other feature types' +
'<br>'
;