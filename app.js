(function () {
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchText = "";
        $scope.responseMsg = "";
        
        $scope.checkLunch = function () {
            if ($scope.lunchText) {
                const words = $scope.lunchText.split(',');
                if (words.length <= 3) $scope.responseMsg = "Enjoy!";
                else $scope.responseMsg = "Too much!"
            } else {
                $scope.responseMsg = "Please enter data first";
            }
        }
    }

})();