var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function ($scope) {
    $scope.greeting = 'Hello!!';
    $scope.anotherGreeting = function () {
        $scope.greeting = 'Hello World!';
    };
}]);
