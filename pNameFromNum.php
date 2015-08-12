<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: pNameFromNum.php                      			                       */
/*  Purpose: returns person name from id string                                    */
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 11 August 2015                                                    */
/*  Released under GPLv2                                                           */
/***********************************************************************************/
/***********************************************************************************/

/*set up the header and the database connection */
/*include 'PATH TO YOUR DATABASE HERE';*/

/* sanatize input. Altough the user SHOULD BE read only, do this for safety */
$pidRaw = $_GET['pid'];
$pidParam = pg_escape_string($pidRaw);

$query = "SELECT name from tbib_people where tbib_people.bam_id ='$pidParam'";

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
$resultsString = "";

/*go through the results for the table */

while($row1 =pg_fetch_assoc($qry_result))
{

        $resultsString.= $row1['name'];
}
/* push out the results to the application */
echo $resultsString;
?>
