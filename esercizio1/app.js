(function() {
    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunchMenu = "";

        $scope.checkLunchMenu = function() {
            if ($scope.lunchMenu === "") {
                $scope.message = "Please enter data first";
                return;
            }

            const dishes = $scope.lunchMenu.split(',').filter(Boolean);

            if (dishes.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }
})();