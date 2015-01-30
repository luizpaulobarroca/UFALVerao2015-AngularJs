var myApp = angular.module('myApp', []);

myApp.directive('student', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "Student: {{student.name}}, ID: {{student.id}} <br />";
    directive.scope = {
        student: "=name"    
    };
    return directive;
});

myApp.controller('myController', ['$scope', function($scope) {
    $scope.Filipe = {};
    $scope.Filipe.name = "Filipe Falcão";
    $scope.Filipe.id = 1;
    
    $scope.LP = {};
    $scope.LP.name = "Luiz Paulo";
    $scope.LP.id = 2;
}]);