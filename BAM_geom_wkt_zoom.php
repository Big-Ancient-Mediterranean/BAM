<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: BAM-geom_wkt_zoom.php                                                   */
/*  Purpose: returns pleiades features using parameters in GEOJson format for the  */
/* 		main search functionality                                                  */
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 11 August 2015                                                    */
/*  Released under GPLv2                                                           */
/***********************************************************************************/
/***********************************************************************************/

/*set up the header and the database connection */
/*include 'PATH TO YOUR DATABASE HERE';*/

/* sanatize input. Altough the user SHOULD BE read only, do this for safety */
$awmc_id_Raw = $_GET['awmc_id'];
$awmc_idParam = pg_escape_string($awmc_id_Raw);
$pidRaw = $_GET['pid'];
$pidParam = pg_escape_string($pidRaw);
$typeRaw = $_GET['type'];
$typeParam = pg_escape_string($typeRaw);

/* set up the query */
$query = "SELECT ST_AsText(the_geom) from pplaces where pid = '$awmc_idParam'";

/* execute query*/
$qry_result = pg_query($query);

/* catch problems */
if (!$qry_result)
{
	echo "Problem with query " . $query; 
    echo pg_last_error(); 
    exit(); 
}
   

$resultsString='';
while($row1 =pg_fetch_assoc($qry_result))
{
        $resultsString.= $row1['st_astext'];

}

/* finish the table text */

/* push out the results to the application */
echo $resultsString;
?>