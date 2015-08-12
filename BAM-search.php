<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne                       								       */
/*  Title: BAM-search.php                                                          */
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
$titleRaw = $_GET['title'];
$titleParam = pg_escape_string($titleRaw);
$awmc_id_Raw = $_GET['awmc_id'];
$awmc_idParam = pg_escape_string($awmc_id_Raw);
$pidRaw = $_GET['pid'];
$pidParam = pg_escape_string($pidRaw);
$typeRaw = $_GET['type'];
$typeParam = pg_escape_string($typeRaw);

/* set up the query */


$query = "SELECT 
* 
FROM
(SELECT tbib_people.name as name_1, tbib_network.bam_id as bam_id_1 FROM tbib_people, tbib_network where cast(tbib_network.character_1 as int) = tbib_people.bam_id) t1 
INNER JOIN
(SELECT tbib_people.name as name_2, tbib_network.bam_id as bam_id_2, tbib_network.reference as reference, pplaces.title as title FROM tbib_people, tbib_pleiades, tbib_network, pplaces where cast(tbib_network.character_2 as int) = tbib_people.bam_id AND lower(tbib_network.reference) = lower (tbib_pleiades.verse) and tbib_pleiades.pleiades_id = pplaces.id) t2
ON t1.bam_id_1 = t2.bam_id_2";

$query .= " order by reference";

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

/*preamble to the table */                 
$resultsString = "";
$resultsString .= '<table class="display" id="mainTable" border="1" cellpadding="2" cellspacing="4" summary="Feature Search Results Table">';
$resultsString .= "<thead>";
$resultsString .= "<th>Entity 1</th>";
$resultsString .= "<th>Entity 2</th>";
$resultsString .= "<th>Reference</th>";
$resultsString .= "<th>Place</th></tr></thead>";
$resultsString .= "<tbody>"; 

/*go through the results for the table */

while($row1 =pg_fetch_assoc($qry_result))
{
		$resultsString.="<tr>";
		$resultsString.="<td>";
        $resultsString.= $row1['name_1'];
        $resultsString.="</td>" ;
        $resultsString.="<td>";
        $resultsString.= $row1['name_2'];
        $resultsString.="</td>" ;
        $resultsString.="<td>";
        $resultsString.= $row1['reference'];
        $resultsString.="</td>" ;
        $resultsString.="<td>";
        $resultsString.= $row1['title'];
        $resultsString.="</td>";
        $resultsString.="</tr>";
}

/* finish the table text */
$resultsString.="</tbody></table>";

/* push out the results to the application */
echo $resultsString;
?>