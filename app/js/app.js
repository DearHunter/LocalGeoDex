'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);



function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Siu Lek Yuen Road Playground",
      content: "Siu Lek Yuen Road, Sha Tin"

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


  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}


function onContentHeaderClick() {
 
};