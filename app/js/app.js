'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']);

  function onContentHeaderClick() {

  };

  //var app = angular.module('myApp', []);  
  //Should I delcare this angular.module as a var?
  //Then I could just do this:
  //app.controller('MainCtrl', ['$scope', '$filter', function($scope, $filter) {