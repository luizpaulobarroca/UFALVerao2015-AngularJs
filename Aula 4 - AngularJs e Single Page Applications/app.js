var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/addPost', {
            templateUrl: 'pages/addPost.html',
            controller: 'addPostController'
        }).
        when('/editPost', {
            templateUrl: 'pages/editPost.html',
            controller: 'editPostController'
        }).
        otherwise({
            redirectTo: '/addPost'
        });
    }
]);

myApp.controller('addPostController', function($scope) {
    $scope.message = "Página utilizada para a inserção de novos posts";
});

myApp.controller('editPostController', function($scope) {
    $scope.message = "Página utilizada para a edição de novos posts";
});