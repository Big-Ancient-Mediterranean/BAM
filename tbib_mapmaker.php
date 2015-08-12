<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: tbub_mapmaker.php                      			                       */
/*  Purpose: creates a map from the database                                       */
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 11 August 2015                                                    */
/*  Released under GPLv2                                                           */
/***********************************************************************************/
/***********************************************************************************/

/*set up the header and the database connection */
/*include 'PATH TO YOUR DATABASE HERE';*/

$pidRaw = $_GET['pid'];
$pidParam = pg_escape_string($pidRaw);

$startRaw = $_GET['start'];
$startParam = pg_escape_string($startRaw);

if ($startParam == '1')
{
$query ="select pplaces.title, count(pplaces.title), max (pplaces.id) as pleaides_id, 
ST_AsGeoJSON(ST_Transform(max(pplaces.the_geom), 3857)) as geom
from tbib_pleiades, pplaces, tbib_network where tbib_pleiades.verse = tbib_network.reference and 
tbib_pleiades.pleiades_id = pplaces.id
GROUP BY
pplaces.title";
}

else
{
$query = "select
pplaces.title, count(pplaces.title), max (pplaces.id) as pleaides_id, 
ST_AsGeoJSON(ST_Transform(max(pplaces.the_geom), 3857)) as geom
from pplaces
JOIN
tbib_pleiades
ON
pplaces.id = tbib_pleiades.pleiades_id
JOIN
tbib_network
ON
tbib_pleiades.verse = tbib_network.reference
where
character_1 = '$pidParam' or character_2 = '$pidParam'
GROUP BY
pplaces.title";
}

	//Execute query
$qry_result = pg_query($query);
if (!$qry_result) { 
            echo "Problem with query " . $query; 
            echo pg_last_error(); 
            exit(); 
        } 
	


//make a geojson object
while($row =pg_fetch_assoc($qry_result)){
//resize for map
$sizeForMap = (($row[count] / 10) + 1);

//arrange for map
$arr[] = array(
"type" => "Feature",
"geometry" => json_decode($row[geom]),
"properties" => array(
	"title" =>$row[title],
	"count" =>$sizeForMap,
	"pid" => $row[pleaides_id]
	),

);

	
}

//encode into geojson
$geojson = '{"type":"FeatureCollection","features":'.json_encode($arr).'}';
echo $geojson;
?>