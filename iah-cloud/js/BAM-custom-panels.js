//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app
//the attribute box holds attributes for the map selection 
var attributeBoxHtml = '<div id="attributeBox" class="nonMapOverlay"> <div id="attributeBoxClose" class="popupCloseCarte">x</div> <div id="attributeBoxContents"></div> </div>';
$("#panelHolder").append(attributeBoxHtml);
//this box holds the "popup" of the layer
overlayPanelsList.attributeBox = 'overlay';


var aboutBoxHtml = '<div id="infoBox" class="nonMapOverlay"> <div id="infoBoxTop"><b> Application Information </b>';
aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxContent" class="allow-scroll ">';
aboutBoxHtml = aboutBoxHtml + 'This application generates a tag cloud of the IAH fellows\'s 100 most popular topics of interest, ranked according to our network  analysis. Simply hit refresh to generate a new cloud. You can take a screen shot to save the image, or if you are on Chrome, you can use <a href="http://nytimes.github.io/svg-crowbar/" target="_blank">the SVG Crowbar extension</a> to download the image.';
aboutBoxHtml = aboutBoxHtml + ' <br /><br />The code for this project and the BAM software framework is created, built, and maintained by <a href="https://rmhorne.org/" target="_blank">Ryan Horne</a>.';
aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="../images/BAM-icon.png" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="../images/GitHub-Mark-32px.png" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="';
if (bamConfigJson.projectGitHubLocation) {
    aboutBoxHtml = aboutBoxHtml + bamConfigJson.projectGitHubLocation;
} else {
    aboutBoxHtml = aboutBoxHtml + 'https://github.com/Big-Ancient-Mediterranean"';
}
aboutBoxHtml = aboutBoxHtml + '" target="_blank"> GitHub </a></b>page.';
aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$("#panelHolder").append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';

//the database box holds a list of all the people in the application

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> All topics </b>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="databaseFullList" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div> </div>';

$("#panelHolder").append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';


//the database box holds a list of all the people in the application