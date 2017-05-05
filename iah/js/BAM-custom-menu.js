//BAM-custom-menu.js
//contains the custom main menu items for BAM

var mainMenuButtonHolder = {};

mainMenuButtonHolder.infoButton = '<button id="infoButton" class="accordion"><img src="../images/open-iconic/info.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Application Information</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.infoButton);

 $('#infoButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
                $('#infoBox').toggle(); //display ours
            });
            
            
mainMenuButtonHolder.databaseLaunchButton = '<button id="databaseLaunchButton" class="accordion"><img src="../images/open-iconic/magnifying-glass.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Search People and Interests</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.databaseLaunchButton);

 $('#databaseLaunchButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
               $('#databaseBox').toggle(); //display ours
            });
            
            
mainMenuButtonHolder.connectionsListLaunchButton = '<button id="connectionsListLaunchButton" class="accordion"><img src="../images/network-diagram.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;All Connections List</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.connectionsListLaunchButton);

 $('#connectionsListLaunchButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
               $('#connectionsBox').toggle(); //display ours
            });            