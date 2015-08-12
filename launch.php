<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: launch.php                                        	                   */
/*  Purpose: launches main application                                             */
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 11 August 2015                                                    */
/*  Released under GPLv2                                                           */
/***********************************************************************************/
/***********************************************************************************/

/*Parameters needed by the program for reading in user files, configs, etc*/
$jsonGet = $_GET['jsonGet'];
$name = $_GET['name'];
$pid = $_GET['pid'];
$json = $_POST['json'];

/*If there are no parameters, set these to a null value for the include functions in the html*/

if (strlen(trim($jsonGet)) < 2)
{
	$jsonGet = false;
}

if (strlen(trim($name)) < 2)
{
	$name = false;
}

if (strlen(trim($pid)) < 2) 
{
	$pid = false;
}

if (strlen(trim($json)) < 2)
{
	$json = false;
}
/*the main functionality is included here */

include 'config.php';
include 'main.html';
?>