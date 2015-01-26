var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', '$http', function ($scope, $http) {
	$scope.accountsList = [];
    $scope.list = function () {
        $http.get('http://www.json-generator.com/api/json/get/coWOiGaQvC?indent=2').success(function (callback) {
            $scope.accountsList = callback;
        });
    };
    $scope.predicate = 'name';
    $scope.reverse = false;
    $scope.list();
}]);