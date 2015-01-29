var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/navs', {
            templateUrl: 'navs.html',
            controller: 'navsController'
        })
        .when('/forms', {
            templateUrl: 'forms.html',
            controller: 'formsController'
        })
        .when('/buttons', {
            templateUrl: 'buttons.html',
            controller: 'buttonsController'
        })
        .otherwise({
            redirectTo: '/navs'      
        });
}]);

myApp.controller('navsController', ['$scope', function ($scope) {
    $scope.message = "Navs";
}]);

myApp.controller('formsController', ['$scope', function ($scope) {
    $scope.message = "Forms";
}]);

myApp.controller('buttonsController', ['$scope', function ($scope) {
    $scope.message = "Buttons";
}]);