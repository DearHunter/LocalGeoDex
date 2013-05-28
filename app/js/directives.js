'use strict';

/* Directives */


// angular.module('myApp.directives', []).
//   directive('appVersion', ['version', function(version) {
//     return function(scope, elm, attrs) {
//       elm.text(version);
//     };
//   }]);


// angular.module('myModule', ['ui.bootstrap']);

var map;	

angular.module('myApp.directives', []).
directive('map', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div></div>',
		link: function($scope, element, attrs, $http) {

			// var popup = L.popup();
			// var southWest = new L.LatLng(40.60092,-74.173508);
			// var northEast = new L.LatLng(40.874843,-73.825035);            
			// var bounds = new L.LatLngBounds(southWest, northEast);
			// L.Icon.Default.imagePath = './img';

			map = L.map('map', {
				center: new L.LatLng(22.26415, 114.238006),
				zoom: 12,
				// maxBounds: bounds,
				maxZoom: 18,
				minZoom: 0
			});



        // create the tile layer with correct attribution
        var tilesURL='http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/2/256/{z}/{x}/{y}.png';
        var tilesAttrib='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
        var tiles = new L.TileLayer(tilesURL, {
        	attribution: tilesAttrib, 
        	opacity: 0.7,
        	detectRetina: true,
        	unloadInvisibleTiles: true,
        	updateWhenIdle: true,
        	reuseTiles: true
        });
        tiles.addTo(map);

        // Read in the Location/Events file 
        // $scope.add = function() {
        // 	$http.get('js/featureDB.js').success(function(data) {
        //     // Loop through the 'locations' and place markers on the map
        //     angular.forEach(data.locations, function(location, key){

        //     	var marker = L.marker([location.latitude, location.longitude]).addTo(map);

        //     });
        // })};
    }    }}

    );


// angular.module("myApp.controllers", [])
// .controller("getJSON_Via_HTTP_Request", function($scope, $http) {
// 		$http.get("js/featureDB.js")
// 		.then(function(dataResponse){
// 			$scope.featDB = dataResponse.data;
//       $scope.oneAtATime = true;
// 		})
// 	});
