function makeBamMarker(feature) {
    var bamMarker;

    if (feature.properties.featureTypes.includes("settlement") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/settlement.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("temple") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/maki_icons/svgs/star-15.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("fort") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/maki_icons/svgs/square-15.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("station") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/diamond.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("mine") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/mine.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("bath") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/bath.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });


    } else if (feature.properties.featureTypes.includes("bridge") == true) {

        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/bridge.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
    } else if (feature.properties.featureTypes.includes("lighthouse") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/maki_icons/svgs/lighthouse-15.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("church") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/church.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("monastery") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/monastery.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("cemetery") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/cemetery.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("dam") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/dam.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("mountain") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/maki_icons/svgs/mountain-15.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("oasis") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/oasis.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("pass") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/pass.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("production") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/production.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
    } else if (feature.properties.featureTypes.includes("rapid") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/rapid.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("salt") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/salt.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("shipwreck") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/shipwreck.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("whirl") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/spiral.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("spring") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/spring.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });


    } else if (feature.properties.featureTypes.includes("tower") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/star.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("tumulus") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/tumulus.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("villa") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/villa.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });

    } else if (feature.properties.featureTypes.includes("waterwheel") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/waterwheel.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
    } else if (feature.properties.featureTypes.includes("windmill") == true) {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/windmill.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
    } else {
        bamMarker = L.icon({
            iconUrl: '../common-files/images/mapsymbols/settlement.svg',
            iconSize: [8, 8], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
    }

    return bamMarker;
}