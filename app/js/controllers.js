// 'use strict';
// What does this mean? If I enable it, obj in my for loop breaks as not defined

/* Controllers */

var markerLayer = L.layerGroup(); 
// Need this global layer to be able to clear the layer before 
//adding a new layer, removed dublicate markers
// In future, need a way of checking if x in layer

angular.module("myApp.controllers", [])
// .controller("getJSON_Via_HTTP_Request", function($scope, $http) {
//      	$scope.oneAtATime = true;
// 		$http.get("js/featureDB.js")
// 		.then(function(response){
// 			$scope.featDB = response.data;
// 		})
// 	});


.controller("getJSON_Via_HTTP_Request", function($scope, $http, $filter) {
	$http.get("js/featureDB.js")
	.then(function(dataResponse){
		$scope.featDB = dataResponse.data;
		$scope.oneAtATime = true;

    	$scope.save = function() {
    		$scope.savedJSON = $filter('filter')($scope.featDB, $scope.query);
    			// var filterSelectLayer = L.geoJson().addTo(map);
    			// console.log($scope.savedJSON);
    			// $scope.json = angular.fromJson($scope.savedJSON);
    		var markerList = [];

    		for (obj in $scope.savedJSON){
   				// console.log($scope.savedJSON[obj].geometry.coordinates[1], $scope.savedJSON[obj].geometry.coordinates[0]);
				var marker = L.marker([$scope.savedJSON[obj].geometry.coordinates[1], 
    				$scope.savedJSON[obj].geometry.coordinates[0]])
					.bindPopup($scope.savedJSON[obj].properties.name);
					// Add other wanted properties here, popups, mouseover effects...
				markerList.push(marker);
			};
			// console.log(markerList);
				// if (markerLayer != 0) {markerLayer.clearLayers()}
			markerLayer.clearLayers();
			markerLayer = L.layerGroup(markerList)

			markerLayer.addTo(map);
			// markerLayer.clearLayers()
		};
		$scope.clear = function() {
			markerLayer.clearLayers()
				//declare markerLayer as a global varible and this will probably work
		};
})});


    				// console.log(marker_location);
    				// new L.Marker(marker_location).addTo(map);
    			// marker1.addTo(map);
    				// for (x in $scope.savedJSON){
    				// 	// var lat = "";
    				// 	// if (lat == )
    				// 	var lat = $scope.savedJSON[obj].geometry.coordinates[x];
    				// 	var marker_location = new L.LatLng(lat, $scope.savedJSON[obj].geometry.coordinates[y]);

    				// 	// console.log(lat);
    				// 	for (y in $scope.savedJSON){
    				// 		var marker_location = new L.LatLng(lat, $scope.savedJSON[obj].geometry.coordinates[y]);
    				// 		console.log(marker_location);
    				// 		;};}

    					






    // 		$scope.save = function() {
     // 		$scope.savedJSON = angular.toJson($filter('filter')($scope.featDB, $scope.query), true);
    		// console.log($scope.savedJSON);
    		// $scope.json = angular.fromJson($scope.savedJSON);
   			// for (obj in $scope.json){
   			// 	console.log($scope.json[obj].geometry.coordinates);};

    			// angular.forEach($scope.savedJSON, function(key, value){
    			// 	console.log(key + ': ' + value)
    			// });
    				// console.log($scope.savedJSON.geometry.point);
        			// var layer = new L.CircleMarker(marker_location);

        			// var marker_location = new L.LatLng($scope.savedJSON[obj].geometry.coordinates);
        			// var layer = new L.CircleMarker(marker_location);

    			// geodexInit($scope.savedJSON);


// for (incident in crime_data) {
//         var marker_location = new L.LatLng(crime_data[incident].lat, crime_data[incident].long);
//         var layer = new L.CircleMarker(marker_location);
// }



//////////////////////////////////////////////////////////////////////////////
    // SOOOOOO this above angular.toJson actually makes it into a string...
    //////////////////////////////////////////////////////////////////////////////

            // angular.forEach(data.locations, function(location, key){
            // 	var marker = L.marker([location.latitude, location.longitude]).addTo(map);
            // })




// Above is working in importing the json file! Now to just get it into the index.html and being displayed on the map!

// function getJSON_Via_HTTP_Request ($scope, $http) {
// 		$http.get("js/featureDB.js")
// 		.then(function(resMeansWhat){
// 			$scope.featDB = resMeansWhat.data;
// 		})};