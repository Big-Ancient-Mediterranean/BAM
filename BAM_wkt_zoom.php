<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: BAM_wkt_zoom.php                                                        */
/*  Purpose: zoom in on a specified point through a database call				   */
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


/* set up the query */
$query = "SELECT ST_AsText(geom) from snagg_data where pleiades_id = '$awmc_idParam' GROUP BY pleiades_id, geom";


/* execute query*/
$qry_result = pg_query($query);

/* catch problems */
if (!$qry_result)
{
	echo "Problem with query " . $query; 
    echo pg_last_error(); 
    exit(); 
}
   
/* iterate through results and create table for datatables */        
$rowsTotal = pg_num_rows($qry_result);

 $resultsString='';
while($row1 =pg_fetch_assoc($qry_result))
{
        $resultsString.= $row1['st_astext'];

}

/* push out the results to the application */
echo $resultsString;
?>