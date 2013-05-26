// 'use strict';

// /* Controllers */

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {}])
//   .controller('MyCtrl2', [function() {}]);


angular.module("myApp.controllers", []);
// .
// 	controller("getJSON_Via_HTTP_Request", function($scope, $http) {
// 		$http.get("js/featureDB.js")
// 		.then(function(resMeansWhat){
// 			$scope.featDB = resMeansWhat.data;
// 		})
// 	}

// Above is working in importing the json file! Now to just get it into the index.html and being displayed on the map!
// );
function getJSON_Via_HTTP_Request ($scope, $http) {
		$http.get("js/featureDB.js")
		.then(function(resMeansWhat){
			$scope.featDB = resMeansWhat.data;
		})}



//   App.controller('TodoCtrl', function($scope, $http) {
//   $http.get('todos.json')
//        .then(function(res){
//           $scope.todos = res.data;                
//         });
// });


function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
  {
    title: "Siu Lek Yuen Road Playground",
    content: "Siu Lek Yuen Road, Sha Tin",
    more: {even: "less"}

  },
  {
    title: "Yee Shing Lane Temporary Sitting Out Area",
    content: "Yee Shing Lane, Chai Wan"
  },
  {
    title: "Kowloon Bay Park",
    content: "Kai Lai Road, Kowloon Bay"
  },
  {
    title: "Carpenter Road Park",
    content: "Junction Road, Kowloon"
  },
  {
    title: "Kung Lok Road Playground",
    content: "Kung Lok Road, Kwun Tong, Kowloon"
  },
  {
    title: "Siu Sai Wan Road Garden",
    content: "Siu Sai Wan Road, Chai Wan"
  },
  {
    title: "Sha Tin Road Safety Park",
    content: "1 Kong Pui Street, Sha Tin"
  },
  {
    title: "Tuen Mun Park",
    content: "Tuen Mun Heung Sze Wui Road, Tuen Mun"
  },
  {
    title: "Wu Shan Recreation Playground",
    content: "Tuen Mun Wu Shan Road"
  },
  {
    title: "West Kowloon Waterfront Promenade",
    content: "West Kowloon Reclamation Area (J/O Austin Road West/ Nga Cheung Road)"
  },
  {
    title: "Tsuen Wan Park",
    content: "59 Wing Shun Street, Tsuen Wan"
  },
  {
    title: "Morrison Hill Road Playground",
    content: "Sung Tak Street/ Morrison Hill Road, Wan Chai"
  },
  {
    title: "Sung Tak Street/ Morrison Hill Road, Wan Chai",
    content: "Lorem ipsum poopem sapsam"
  },
  {
    title: "Tsing Yi Northeast Park",
    content: "10, Tam Kon Shan Road, Tsing Yi"
  },
  {
    title: "Quarry Bay Park",
    content: "Near Hoi Tai Street, Quarry Bay"
  },
  {
    title: "Pak Wo Road Playground",
    content: "Pak Wo Road, Fanling, N.T."
  },

  {
    title: "Tsing Hung Road Playground",
    content: "Tsing Hung Road, Tsing Yi, N.T."
  }
  ];
  // featureCollection.type.features.type
  $scope.geojson = [
    {
      "type": "Feature",
      "properties": {
        "ENGLISH CATEGORY": "Cycling Sites",
        "中文類別": "單車場",
        "ENGLISHNAME": "Siu Lek Yuen Road Playground",
        "中文名稱": "小瀝源路遊樂場",
        "ADDRESS": "Siu Lek Yuen Road, Sha Tin",
        "中文地址": "沙田小瀝源路"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        114.206377,
        22.386308,
        0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ENGLISH CATEGORY": "Cycling Sites",
        "中文類別": "單車場",
        "ENGLISHNAME": "Yee Shing Lane Temporary Sitting Out Area",
        "中文名稱": "怡盛里臨時休憩處",
        "ADDRESS": "Yee Shing Lane, Chai Wan",
        "中文地址": "柴灣怡盛里"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        114.238006,
        22.26415,
        0
        ]
      }
    }];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  };