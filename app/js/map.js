var map = L.map('map').setView([22.25018, 114.18571], 12);

var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleID}/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	minZoom: 11,
	key: 'BC9A493B41014CAABB98F0471D759707',
	styleID: 96219, 
	reuseTiles: true
}).addTo(map);

// L.geoJson(geojsonFeature).addTo(map);


function onEachFeature(feature, layer) {
	    // does this feature have a property named popupContent?
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent);
	    }
	}

	function geodexInit(feat) {
		L.geoJson(feat, {
		    onEachFeature: onEachFeature
		}).addTo(map);
	}

geodexInit(featureCollection)