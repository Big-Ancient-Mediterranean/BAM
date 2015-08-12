<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2015 Ryan Horne								                               */
/*  Title: BAM_inner_popup.php                                       		       */
/*  Purpose: returns datatables instance										   */
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

$perseusURL = 'http://www.perseus.tufts.edu/hopper/text?doc=urn:cts:greekLit:tlg0031.tlg003.perseus-eng1:';
$graphURL = 'http://awmc.unc.edu/awmc/applications/bam/luke/graph/index.html#';


/* set up the query */
$query = "SELECT 
* 
FROM
(SELECT tbib_people.name as name_1, tbib_network.bam_id as bam1 FROM tbib_people, tbib_network where cast(tbib_network.character_1 as int) = tbib_people.bam_id) t1 
INNER JOIN
(SELECT tbib_people.name as name_2, tbib_network.bam_id as bam2, tbib_network.reference as reference, tbib_pleiades.pleiades_id as pleiades_id FROM tbib_people, tbib_pleiades, tbib_network where cast(tbib_network.character_2 as int) = tbib_people.bam_id AND lower(tbib_network.reference) = lower (tbib_pleiades.verse)) t2
ON t1.bam1 = t2.bam2 AND t2.pleiades_id = '$pidParam'
ORDER BY reference";




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
$resultsString .= '<table class="display" id="popupSnagTable" border="1" cellpadding="2" cellspacing="4" summary="Feature Information">';
$resultsString .= "<thead><tr>";
$resultsString .= "<th max-width: 10px; word-wrap:break-word;>Entity 1</th>";
$resultsString .= "<th max-width: 10px; word-wrap:break-word;>Entity 2</th>";
$resultsString .= "<th max-width: 10px; word-wrap:break-word;>Reference</th>";
$resultsString .= "<th max-width: 10px; word-wrap:break-word;>bam_id</th></tr></thead>";
$resultsString .= "<tbody>"; 

/*go through the results for the table */

while($row1 =pg_fetch_assoc($qry_result))
{

/* replace the luke information with a format understood by Perseus */

$verseInfo = str_replace("Lk ", "", $row1['reference']);
$verseInfo = str_replace(":", ".", $verseInfo);





		$resultsString.="<tr>";
		$resultsString.="<td max-width: 10px; word-wrap:break-word;>";
        $resultsString.= $row1['name_1'];
        $resultsString.="</td>" ;
        $resultsString.="<td max-width: 10px; word-wrap:break-word;>";
        $resultsString.= $row1['name_2'];
        $resultsString.="</td>" ;
        $resultsString.="<td max-width: 10px; word-wrap:break-word;>";
        $resultsString.= $row1['reference'];
        $resultsString.="</td>";
  		$resultsString.="<td>";
        $resultsString.= $row1['bam2'];
        $resultsString.="</td>" ;
        $resultsString.="</tr>";
}


/* finish the table text */
$resultsString.="</tbody></table>";

/* push out the results to the application */
echo $resultsString;
?>