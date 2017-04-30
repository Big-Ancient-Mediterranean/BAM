//BAM-layers.js - for adding layers to the application
//this is added *after* the map objects have all been created


var pleiadesUrl = 'https://pleiades.stoa.org';


//baselayer
var bamMapBaseLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
    attribution: 'Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>',
    maxZoom: 12,
    id: 'isawnyu.map-knmctlkh',
    accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

bamMapBaseLayer.addTo(map);



//to hold all of the overlay layers
var bamOverlayLayers = [];

//to hold any additional base layers
var bamBaseLayers = [];


//we are going to add layers based on our data



