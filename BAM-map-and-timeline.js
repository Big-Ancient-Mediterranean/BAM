//BAM-map-and-timeline.js
//this code connects our map and timeline. This is not always necessary for each project

     d3.json(nodeEntityFileName, function(error, json) {

                var nodes = json.nodes.map(function(d) {

                    //now we make a .json structure of just the people

                    var personjsonFeature = {
                        'type': 'Person',
                        'properties': {
                            'bamId': d.attributes.bam_id,
                            'abbreviation': d.attributes.abbreviation,
                            'author_latin': d.attributes.author_latin,
                            'author_english': d.attributes.author_english,
                            'century': d.attributes.century,
                            'start': d.attributes.start,
                            'end': d.attributes.end,
                            'date_of_birth': d.attributes.date_of_birth,
                            'date_of_death': d.attributes.date_of_death,
                            'floruit': d.attributes.floruit,
                            'late_antique': d.attributes.late_antique,
                            'christian': d.attributes.christian,
                            'id': d.attributes.pleiades_id,
                            'location': d.attributes.title

                        }
                    };
                    peopleHolder.push(personjsonFeature);

                    //pull out the geo-data and make some geojson
                    //could have blank values, so checking and excluding those
                    if (isNaN(d.attributes.reprlong) == false && d.attributes.reprlong != '') {

                        //should check if it is holder first, increment if it is, add a new one if it is not
                        //the logic here is that each place should be represented by a single object. Needed data can be filtered
                        //this is where we pull out the data

                        var geojsonFeature = {
                            'type': 'Feature',
                            'properties': {
                                'id': d.attributes.pleiades_id,
                                'label': d.attributes.title,
                                //default values for just displaying things
                                'start': -100,
                                'end': 100,
                                'count': 1
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [d.attributes.reprlong, d.attributes.reprlat]
                            }
                        };
                        if (inArray(d.attributes.pleiades_id, placesHolder) == false) {

                            placesHolder.push(geojsonFeature);
                            placesList[d.id] = geojsonFeature;
                        }
                        //hold all the features
                        masterPlacesList.push(geojsonFeature);

                        //now that we have people and places, we need to assign the pleiades_id and dates those people use to a data structure, along with their BAM ID
                        var peoplePlacer = {
                            'id': d.attributes.pleiades_id,
                            'bamId': d.attributes.bam_id,
                            'start': d.attributes.start,
                            'end': d.attributes.end

                        };

                        placeTimeHolder.push(peoplePlacer);
                    }

                    //add to datatables
                    mainTable += "<tr>";
                    mainTable += "<td>";
                    mainTable += d.attributes.bam_id;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.abbreviation;
                    mainTable += "</td>";
                    //title
                    mainTable += "<td>";
                    mainTable += d.attributes.author_latin;
                    mainTable += "</td>";
                    //for the external data links
                    mainTable += "<td>";
                    mainTable += d.attributes.author_english;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.century;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.date_of_birth;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.date_of_death;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.floruit;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.late_antique;
                    mainTable += "</td>";

                    mainTable += "<td>";
                    mainTable += d.attributes.christian;
                    mainTable += "</td>";
                    
                    mainTable += "<td>";
                    mainTable += d.attributes.title;
                    mainTable += "</td>";

                    mainTable += "</tr>";
                })

                //as the layer we need depends on data to work, it has to fall under the loading mechanism for our csv, which is asynchronous. 

                main_locations = new L.geoJson(placesHolder, {
                    onEachFeature: onEachFeature,
                    pointToLayer: function(feature, latlng) {
                        return L.circleMarker(latlng, dynamicPlacesStyle);
                    }
                });


                //some styling due to count. Mess around and see what is visually arresting.
                main_locations.eachLayer(function(layer) {

                    if (layer.feature.properties.count <= 3) {
                        layer.setStyle({
                            radius: 3
                        });
                    } else if (layer.feature.properties.count <= 40) {
                        layer.setStyle({
                            radius: layer.feature.properties.count
                        });
                    } else {
                        layer.setStyle({
                            radius: 40
                        });
                    }
                });


                main_locations.addTo(map);
                map.fitBounds(main_locations.getBounds());

                //buttons here as some of the zoom functionality, etc depend on the data that we load
                L.easyButton('<span class="easySearch">&curren;</span>', function() {
                        map.fitBounds(main_locations.getBounds());
                    },
                    'Return To Original Zoom'
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
                    buttons: [
                        'copy', 'csv', 'print'
                    ]
                });

                $('#mainTable tbody').on('click', 'tr', function() {
                    var data = mainTableDataTable.row(this).data();
                    var result = $.grep(placesHolder, function(e) {
                        return e.properties.id === data[0];
                    });
                    //set zoom to choice
                    //right now hardwired for the first result, as UIDs are unique to this application. Could change this later.
                    map.setView([result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]], 9);

                    //from http://stackoverflow.com/questions/31237459/how-to-open-leaflet-marker-popup-from-data-geojson-with-href
                    main_locations.eachLayer(function(feature) { //geojson is the object which have your data

                        //need to turn this into a singular function to capture all the data
                        if (feature.feature.properties.id === data[0]) { //insert the id in place of 'required-id'

                            makeBamPopup(feature.feature, map)
                            $("#leftTextPaneContent").html(htmlForBox);
                        }
                    });
                });

                $('#map').on('click', '.popupZoomButton', function(e) {
                    var result = $.grep(placesHolder, function(e2) {
                        return e2.properties.id === e.target.id;
                    });
                    //set zoom to choice
                    //right now hardwired for the first result, as UIDs are unique to this application. Could change this later.
                    map.setView([result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]], 9);
                    //setLatLng
                    var newlatlng = L.latLng(result[0].geometry.coordinates[1], result[0].geometry.coordinates[0]);
                    popup.setLatLng(newlatlng);
                    popup.update();
                });


                //escape key closes the attribute pane and restores the network.
                $(document).keyup(function(e) {
                    if (e.keyCode == 27) { // escape key maps to keycode `27`
                        $('#attributeBox').hide();
                        $('#textpane').hide();
                        $('#infoBox').hide();
                        $('#dataBox').hide();
                        //close map popups
                        map.closePopup();
                    }
                });

                //code for going to pleiadesID as part of URL
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
            });