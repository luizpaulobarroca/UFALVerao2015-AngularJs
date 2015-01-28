var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.value = 0;
    $scope.increment = function () {
        $scope.value = $scope.value + 1;
    };
}]);