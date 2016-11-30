<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2013 Ryan Horne, Ancient World Mapping Center                               */
/* Title: a_la_carte_config.php                                                    */
/* Purpose: creates the variable configuration json object for a_la_carte. This    */
/*   could eventually be turned into some kind of GUI                              */
/* Author(s): Ryan Horne                                                           */
/* Version: 1.0 6 October 2013                                                     */
/* Released under GPLv2                                                            */
/***********************************************************************************/
/***********************************************************************************/

/* what is your name? */
	$applicationName = 'AWMC: À-la-carte 3.0 Framework';
/* set the map state */
	$initialLat = 40.58058;
	$initialLon = 36.29883;
	$initialZoom = 4;
/* any additional layers NEED to be in a .js file */	
	$layersForApplication = 'sundials_layers.js';
/* any additional functions NEED to be in a .js file */	
	$functionsForApplication = 'somefileurl';
/* any additional feature rules NEED to be in a .js file */	
	$featurerulesforApplication = 'somefeaturerules';
/* any additional texts NEED to be in a .js file */	
	$textsForApplication ='somefileurl';
	
?>