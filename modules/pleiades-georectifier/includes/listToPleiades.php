<?php
/***********************************************************************************/
/***********************************************************************************/
/* (c) 2016 Ryan Horne                       								       */
/*  Title: listToPleiades.php                                                      */
/*  Purpose: takes an arbitrary list that contains pleiades ids and returns geojson*/
/*  Author(s): Ryan Horne                                                          */
/*  Version: 0.1 10 June 2016                                                      */
/*  Released under GPLv3                                                           */
/***********************************************************************************/
/***********************************************************************************/
  
   if(isset($_POST['plList'])) {
    $json = $_POST['plList'];
    }
   else {
    exit("error with data entry");
  }

$pidArray = json_decode($json);

//this takes our array, identifies the pleiades ID column, and gets a count for each unique value. This reduces the calls yet still preserves the quanitiy for mapping.
$pidCountArray = array_count_values($pidArray);

//now grab the data from pleiades

foreach ($pidCountArray as $key => $value) {
    
    // Get cURL resource
    $curl = curl_init();
    //options and a user agent
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_URL => 'http://pleiades.stoa.org/places/' . $key . '/json',
        CURLOPT_USERAGENT => 'BAM geometry rectifier'
    ));
    // Send the request & save response to $resp
    $resp = curl_exec($curl);
    
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    //bad requests are so far geberating these requests. May have more robust error handling in the future
    if ($httpCode == 404 || $httpCode == 410) {
        //do nothing for now; add to error array later
    } else {
        //we have a hit. Now to parse the json and to get the things we need
        $json = json_decode($resp, true);
        if ($json['reprPoint'] !== null) {
            $arr[] = array(
                "type" => "Feature",
                "geometry" => array(
                    "type" => "Point",
                    "coordinates" => $json['reprPoint']
                ),
                "properties" => array(
                    "title" => $json['title'],
                    "count" => $value,
                    "pid" => $json['id']
                )
            );
            
        }
    }
    // Close request to clear up some resources
    curl_close($curl);
}

//encode into geojson
$geojson = '{"type":"FeatureCollection","features":' . json_encode($arr) . '}';
echo $geojson;

?>