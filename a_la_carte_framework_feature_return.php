<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: pNameFromNum.php                      			                       */
/*  Purpose: A legacy file that will be replaced soon                              */
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 11 August 2015                                                    */
/*  Released under GPLv2                                                           */
/***********************************************************************************/
/***********************************************************************************/

/*set up the header and the database connection */
/*include 'PATH TO YOUR DATABASE HERE';*/

$pidRaw = $_GET['pid'];
$pidParam = pg_escape_string($pidRaw);


$query = "SELECT
pplaces.pid,
pplaces.awmc_id,
pplaces.title, 
pplaces.featuretypes,
pplaces.timeperiods,
pplaces.path,
pplaces.description,
pplaces.hasconnectionswith,
pplaces.connectswith,
ST_AsGeoJSON(ST_Transform(pplaces.the_geom, 3857)) as geom 
FROM pplaces WHERE pplaces.pid LIKE '$pidParam'";


	//Execute query
$qry_result = pg_query($query);
if (!$qry_result) { 
            echo "Problem with query " . $query; 
            echo pg_last_error(); 
            exit(); 
        } 
	


//make a geojson object
while($row =pg_fetch_assoc($qry_result)){

$arr[] = array(
"type" => "Feature",
"geometry" => json_decode($row[geom]),
"properties" => array(
	"title" =>$row[title],
	"awmc_id" =>$row[awmc_id],
	"featuretypes" => $row[featuretypes],
	"pid" => $row[pid],
	"timeperiods" => $row[timeperiods],
	"description" => $row[description],
	"path" => $row[path],
		"hasconnectionswith" => $row[hasconnectionswith],
	"connectswith" => $row[connectswith]
	),

);

	
}


$geojson = '{"type":"FeatureCollection","features":'.json_encode($arr).'}';
echo $geojson;
?>