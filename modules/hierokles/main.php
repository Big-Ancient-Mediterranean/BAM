<?php
   $PageTitle="Hierokles: Synekdemos";
   $NavBarBrand ="Hierokles: <i>Synekdemos</i>";
   $NavBarImageLink='<a href="http://awmc.unc.edu" target="_blank">';
   //check to see if there are any parameters for the application
   if (isset($_GET['pidInput'])) {
 $zoomToFeature = $_GET['pidInput'];
}
   include_once('../common-files/includes/BAM-header.php');
   include_once('../common-files/includes/BAM-map-headers.php');
   include_once('../common-files/includes/BAM-datatable-headers.php');

?>
    <link rel="stylesheet" href="hierokles.css" type="text/css" />
    </head>

    <body>

        <?php 
		include_once('BAM-panels.php');
		include_once('BAM-layout.php'); 
		?>

        <script>
            //this hides the tooltip so it is not hovering around
            $('.city-name').hide();

            var htmlLocation = 'http://awmc.unc.edu/awmc/applications/bam/modules/hierokles/';

            //restrict the interval to only numbers
            $('.numbersOnly').keyup(function() {
                this.value = this.value.replace(/[^0-9\.]/g, '');
            });
            
        	//style for the nodes. Can be expanded if needed
            var dynamicPlacesStyle = {
                radius: 3,
                fillColor: "white",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.7
            };

            var dioStyle = {
                "color": "#ff7800",
                "weight": 5,
                "opacity": 0.65,
                "weight": 1.5
            };

            var provStyle = {
                "color": "#9900ff",
                "weight": 5,
                "opacity": 0.65,
                "weight": 1.5
            };

            var mainTable = '<table class="display" id="mainTable" border="1" cellpadding="2" cellspacing="4" summary="Feature List Table">';
            mainTable += "<thead>";
            //this will be hidden later
            mainTable += "<th>ID</th>";
            mainTable += "<th>Pleaides ID</th>";
            mainTable += "<th>Title</th>";
            mainTable += '<th>Links</th>';
            mainTable += '<th>Diocese</th>';
            mainTable += '<th>Province</th>';
            mainTable += '<th>Hierokles Reference</th>';
            mainTable += '<th>Other References</th>';
            mainTable += "</tr></thead>";
            mainTable += "<tbody>";

            //store all of the place information so we can access location and data without having to do weird things to leaflet
            var placesHolder = [];
            //create a popup which we will add things to later
            var popup = L.popup();

            //using d3 here as it is used extensively in BAM. This could be replaced by another, lighter library, but I a, keeping it to allow for more modular access if other parts of BAM are needed

            d3.json("hierokles_places", function(error, json) {

                var nodes = json.nodes.map(function(d) {

                    //will make an option to just pull in geojson if it is in that format - this pulls in data from Gephi, which is a central feature of other BAM components	
                    //pull out the geo-data and make some geojson
                    if ((d.attributes.type == 'place') && (isNaN(d.attributes.x) == false)) {

                        //this should be some kind of config, but different projects may wish to show different data
                        var geojsonFeature = {
                            'type': 'Feature',
                            'properties': {
                                'id': d.id,
                                'label': d.attributes.title,
                                'diocese': d.attributes.diocese,
                                'province': d.attributes.province,
                                'pageNum': d.attributes.honigmann_page_number,
                                'sectionNum': d.attributes.hierokles_section_and_line_numbers,
                                'exRef': d.attributes.external_references,
                                'uid': d.attributes.uid
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [d.attributes.x, d.attributes.y]
                            }
                        };

                        placesHolder.push(geojsonFeature);
                    }

                    //add to datatables
                    mainTable += "<tr>";
                    //hidden uid
                    mainTable += "<td>";
                    mainTable += d.attributes.uid;
                    mainTable += "</td>";
                    //hidden pleiadesID
                    mainTable += "<td>";
                    mainTable += d.id;
                    mainTable += "</td>";
                    //title
                    mainTable += "<td>";
                    mainTable += d.attributes.title;
                    mainTable += "</td>";
                    //for the external data links
                    mainTable += "<td>";
                    mainTable += '<a href="https://pleiades.stoa.org/places/' + d.id + '" target="_blank"><img src="../common-files/images/pleiades_icon.png"></a>&nbsp;&nbsp;<a href="http://pelagios.org/peripleo/pages/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F' + d.id + '" target="_blank"><img src="../common-files/images/pelagios.png"></a>';
                    mainTable += "</td>";
                    //Diocese
                    mainTable += "<td>";
                    mainTable += d.attributes.diocese;
                    mainTable += "</td>";
                    //Province
                    mainTable += "<td>";
                    mainTable += d.attributes.province;
                    mainTable += "</td>";
                    //Hierokles Reference
                    mainTable += "<td>";
                    mainTable += d.attributes.hierokles_section_and_line_numbers;
                    mainTable += "</td>";
                    //external references
                    mainTable += "<td>";
                    mainTable += d.attributes.external_references;
                    mainTable += "</td>";
                    mainTable += "</tr>";

                })

                //as the layer we need depends on data to work, it has to fall under the loading mechanism for our csv, which is asynchronous. 

                //using a plugin to load leaflet ajax. Nice, quick, and painless!
                var dioLayer = new L.GeoJSON.AJAX("hierokles_dioceses.geojson", {
                    style: dioStyle
                });
                dioLayer.addTo(map);

                var provincesLayer = new L.GeoJSON.AJAX("hierokles_provinces.geojson", {
                    style: provStyle
                });
                dioLayer.addTo(map);

                //move our places layer to the top to allow tool tips and clicking
                dioLayer.on('data:loaded', function() {
                    main_locations.bringToFront();
                });

                provincesLayer.on('data:loaded', function() {
                    main_locations.bringToFront();
                });


                //move our places layer to the top to allow tool tips and clicking when the layer switcher is used
                map.on('overlayadd', function() {
                    main_locations.bringToFront();

                });

                var main_locations = new L.geoJson(placesHolder, {
                    onEachFeature: onEachFeature,
                    pointToLayer: function(feature, latlng) {
                        return L.circleMarker(latlng, dynamicPlacesStyle);
                    }
                });

                main_locations.addTo(map);
                map.fitBounds(main_locations.getBounds());

                //overlay control to allow for user selection                
                var overlayMaps = {
                    "Places": main_locations,
                    "Dioceses": dioLayer,
                    "Provinces": provincesLayer
                };

                L.control.layers(null, overlayMaps).addTo(map);


                //buttons here as some of the zoom functionality, etc depend on the data that we load
                L.easyButton('<span class="easySearch">&curren;</span>', function() {
                        map.fitBounds(main_locations.getBounds());
                    },
                    'Return To Original Zoom'
                ).addTo(map);

                L.easyButton('<span class="easySearch">&telrec;</span>', function() {
                        $('#dataBox').toggle();
                        $('#infoBox').hide();
                    },
                    'Places Search And Database'
                ).addTo(map);

                L.easyButton('<span class="easySearch">&quest;</span>', function() {
                        $('#infoBox').toggle();
                        $('#dataBox').hide();
                    },
                    'Information'
                ).addTo(map);

                L.easyPrint().addTo(map);


                //close off datatable
                mainTable += "</tbody></table>";
                $("#dataBoxContent").html(mainTable + '<br/>');


                $('#dataBoxCloseBox').mousedown(function() {
                    $('#dataBox').hide();
                });

                //more datatable configs
                var mainTableDataTable = $('#mainTable').DataTable({
                    dom: 'Bfrtip',
                    "bAutoWidth": false,
                    "sPaginationType": "full_numbers",
                    "columnDefs": [{
                        "targets": [0],
                        "visible": false
                            //"searchable": false
                    }, {
                        "targets": [1],
                        "visible": false
                    }],
                    buttons: [
                        'copy', 'csv', 'print'
                    ]
                });

                $('#mainTable tbody').on('click', 'tr', function() {
                    var data = mainTableDataTable.row(this).data();
                    var result = $.grep(placesHolder, function(e) {
                        return e.properties.uid === data[0];
                    });
                  
                    //set zoom to choice
                    //right now hardwired for the first result, as UIDs are unique to this application. Could change this later.
                    map.setView([result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]], 9);

                    //from http://stackoverflow.com/questions/31237459/how-to-open-leaflet-marker-popup-from-data-geojson-with-href
                    main_locations.eachLayer(function(feature) { //geojson is the object which have your data

                        //need to turn this into a singular function to capture all the data
                        if (feature.feature.properties.uid === data[0]) { //insert the id in place of 'required-id'

                            makeBamPopup(feature.feature, map)
                            $("#leftTextPaneContent").html(htmlForBox);
                            //  feature.openPopup(); //open popup for matching ID
                        }
                    });
                });

                $('#map').on('click', '.popupZoomButton', function(e) {
                    var result = $.grep(placesHolder, function(e2) {
                        return e2.properties.uid === e.target.id;
                    });
                    //set zoom to choice
                    //right now hardwired for the first result, as UIDs are unique to this application. Could change this later.
                    map.setView([result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]], 9);
                    //popup.update();
                    //setLatLng
                    var newlatlng = L.latLng(result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]);
                    popup.setLatLng(newlatlng);
                    popup.update();
                });


                //escape key closes the attribute pane and restores the network.
                $(document).keyup(function(e) {
                    if (e.keyCode == 27) { // escape key maps to keycode `27`
                        $('#attributepane').hide();
                        $('#textpane').hide();
                        $('#infoBox').hide();
                        $('#dataBox').hide();
                        //close map popups
                        map.closePopup();
                    }
                });

                try {
                    var zoomPleiadesID = "<?php if (isset($_GET['pidInput'])) {$zoomToFeature = $_GET['pidInput'];echo $zoomToFeature;}?>";

                    if (zoomPleiadesID != 0) {
                        var result = $.grep(placesHolder, function(e) {
                            return e.properties.id === zoomPleiadesID;
                        });

                        //from http://stackoverflow.com/questions/31237459/how-to-open-leaflet-marker-popup-from-data-geojson-with-href
                        main_locations.eachLayer(function(feature) { //geojson is the object which have your data

                            //need to turn this into a singular function to capture all the data
                            if (feature.feature.properties.id === zoomPleiadesID) { //insert the id in place of 'required-id'
                                map.setView([result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]], 9);
                                makeBamPopup(feature.feature, map);
                            }
                        });
                    }
                }
                //quick and dirty way to keep moving if there is an issue
                catch (e) {}

                //functions down here                
                function onEachFeature(feature, layer) {
                    //bind click
                    layer.on('click', function(e) {
                        makeBamPopup(e.target.feature, map);
                    });
                    layer.on({
                        mouseover: function(e) {
                            $cityName.hide();
                            $cityName.text(e.target.feature.properties.label).show();

                            //feature.bindTooltip("my tooltip text").openTooltip();
                        },
                        mouseout: function() {
                            $cityName.hide();
                        }
                    });
                }
            });

            //setup the map

            //setup the map
            L.mapbox.accessToken = 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ';
            var map = L.mapbox.map('map', null, {
                    maxZoom: 10
                }),
                $cityName = $('.city-name');

            map.setView([40.58058, 36.29883], 4);

            var layers = {
                AWMC: L.mapbox.tileLayer('isawnyu.map-knmctlkh', {
                    maxZoom: 6,
                    attribution: '&copy; <a href="http://awmc.unc.edu/" target="_blank">AWMC</a>'

                }),
                Empty: new L.tileLayer('')
            };

            layers.AWMC.addTo(map);
            L.control.scale().addTo(map);

            //tooltip for mouse over city names
            var tooltipSpan = document.getElementById('city-name');

            window.onmousemove = function(e) {
                var x = e.clientX;
                var y = e.clientY;
                tooltipSpan.style.top = (y + 20) + 'px';
                tooltipSpan.style.left = (x + 20) + 'px';
            };

            //navigation for closing, etc

            $('#aboutLauncher').click(function() {
                $('#dataBox').hide();
                $('#infoBox').toggle();
            });

            $('#infoBoxCloseBox').mousedown(function() {
                $('#infoBox').hide();
            });

            function makeBamPopup(feature, map) {

                var htmlForBox = '<center><table><tr>';
                htmlForBox = htmlForBox + '<td><div id="' + feature.properties.uid + '" class="popupZoomButton popupBaseButton"></div></a></td>';
                htmlForBox = htmlForBox + '<td><a href="http://pleiades.stoa.org/places/' + feature.properties.id + '" target="_blank"><div id="wmsPleiades' + feature.properties.id + '" class="popupBaseButton popupPleiadesButton" title="View ' + feature.properties.label + ' as ' + feature.properties.id + ' at Pleiades"></div></a></td>';
                htmlForBox = htmlForBox + '<td><a href="http://pelagios.org/peripleo/pages/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F' + feature.properties.id + '" target="_blank"><div id="wmsAwmc' + feature.properties.id + '" class="popupBaseButton popupPelagiosButton" title="View ' + feature.properties.label + ' at Pelagios"></div></a></td></table></center>';
                htmlForBox = htmlForBox + '<br />Diocese: <b>' + feature.properties.diocese + '</b>';
                htmlForBox = htmlForBox + '<br />Province: <b>' + feature.properties.province + '</b>';
                htmlForBox = htmlForBox + '<br /><a href="http://www.worldcat.org/oclc/419736368" target="_blank">Honigmann</a> Page Number: <b>' + feature.properties.pageNum + '</b>';
                htmlForBox = htmlForBox + '<br />Hierokles Reference: <b>' + feature.properties.sectionNum + '</b>';
                htmlForBox = htmlForBox + '<br />Other References: <b>' + feature.properties.exRef + '</b>';

                if (feature.properties.id != 0) {
                    htmlForBox = htmlForBox + '<br /><a href="' + htmlLocation + feature.properties.id + '" target="_blank">Permalink</a>';
                }

                var titleForBox = feature.properties.label;
                htmlForBox = '<h1><center>' + titleForBox + '</h1></center>' + htmlForBox;
                
                var popupLatLng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
                
                popup.setLatLng(popupLatLng);
                popup.setContent(htmlForBox);
                popup.update();
                popup.openOn(map);
            }
        </script>
    </body>

    </html>