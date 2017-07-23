//bamMap.js

            //now for map setup
            var map = L.map('map', {
                //so we can place the zoom control where we want it
                zoomControl: false
            });

            //zoom to map state
            setInitialMapState(map, bamConfigJson.bamMapConfig.MapSetViewX, bamConfigJson.bamMapConfig.MapSetViewY, bamConfigJson.bamMapConfig.MapSetViewZoom);

			//set map controls

            //first, layer switcher. Will add more to config
            var bamLayerControl = new L.control.layers(null, null);
            bamLayerControl.addTo(map);

            //now the zoom buttons, repositioned from the default left to the right
            L.control.zoom({
                position: 'topright'
            }).addTo(map);

            //this button restores the map to the original zoom.
            L.easyButton({
                id: 'baseZoom',
                position: 'topright',
                type: 'replace',
                leafletClasses: true,
                states: [{
                    stateName: 'get-center',
                    onClick: function(button, map) {
                        //fires our function
                        setInitialMapState(map, bamConfigJson.bamMapConfig.MapSetViewX, bamConfigJson.bamMapConfig.MapSetViewY, bamConfigJson.bamMapConfig.MapSetViewZoom);
                    },
                    title: 'Return to original zoom',
                    icon: '<span class="restoreZoom">&curren;</span>'
                }]
            }).addTo(map);

            //because printing is a feature that we keep being asked about
            L.easyPrint({
                position: 'topright',
                elementsToHide: 'a,button,span'
            }).addTo(map);

            //a map without a scale is unthinkable!                
            L.control.scale({
                position: 'bottomright'
            }).addTo(map);

            //other functions here

            //this sets the map state to the default
            function setInitialMapState(map, BAMMapSetViewX, BAMMapSetViewY, BAMMapSetViewZoom) {
                //set the map zoom to our config file
                map.setView([BAMMapSetViewX, BAMMapSetViewY], BAMMapSetViewZoom);

            }
