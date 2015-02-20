function formController ($scope) 
    $scope.master = {knee:, elbow:,workstation,inputdev};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
}