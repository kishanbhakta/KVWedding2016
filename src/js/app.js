(function() {
  'use strict';
  var app = angular
  .module('myApp', [
    'ui.router'
  ]);

  app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home' ,{
      url: '/',
      templateUrl : 'templates/insta.tpl.html',
      controller: 'InstaCtrl'
    });
}]);

})();
