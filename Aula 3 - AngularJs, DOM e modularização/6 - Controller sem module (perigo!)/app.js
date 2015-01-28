function myController ($scope) {
    $scope.value = 0;
    $scope.increment = function () {
        $scope.value = $scope.value + 1;    
    }
}