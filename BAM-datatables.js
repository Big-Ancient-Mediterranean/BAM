//BAM-datatables.js
//this contains tables and logic for adding your data to datatables
//these are then used, if desired, in different visual representations
//I have to change this functionality to be variable and not hardwired


//now for the popuptable
var popupTable;

popupTable = '<table class="display" id="popupTable" border="1" cellpadding="2" cellspacing="4" summary="List of Authors and Works for Popups">';
popupTable += "<thead>";
popupTable += "<th>bamId</th>";
popupTable += "<th>abbreviation</th>";
popupTable += "<th>author_latin</th>";
popupTable += "<th>author_english</th>";
popupTable += "<th>century</th>";
popupTable += "<th>location</th>";
popupTable += "</tr></thead>";
popupTable += "<tbody>";
popupTable += "</tbody></table>";
