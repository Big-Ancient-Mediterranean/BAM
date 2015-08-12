<?php
header('Content-Type: text/html; charset=utf-8');
	// Retrieve data from Query String
//include '../mapfiles/datalog_am.php'; 
	

$user= $_GET['user'];
$pword = $_GET['pword'];


$dbconn = pg_connect("host=127.0.0.1 port=5432 dbname=awmc user='$user' password='$pword'");

if ($user == 'awmc_reviewer1')
{
$tablename = 'am_places_review_1';
}

if ($user == 'awmc_reviewer2')
{
$tablename = 'am_places_review_2';

}

if ($user == 'awmc_reviewer3')
{
$tablename = 'am_places_review_3';

}

if ($user == 'awmc_reviewer4')
{
$tablename = 'am_places_review_4';

}

if ($user == 'awmc_reviewer5')
{
$tablename = 'am_places_review_5';

}

 
 $query = "select min (note_id) as minpid from edit_notes";
 	//Execute query
$qry_result = pg_query($query);
if (!$qry_result) { 
            echo "Problem with query " . $query; 
            echo pg_last_error(); 
            exit(); 
        } 
for ($row = 0; $row < pg_numrows($qry_result); $row++) {        
$pidnum = pg_result($qry_result, $row, 'minpid');
}

 echo $pidnum;



pg_close($dbconn);

?>