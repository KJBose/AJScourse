(function(){
  'use sctrict'
  angular.module('LunchOptions', [])

  .controller('LunchCheckController', LunchCheckController );

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchlist = '';

    $scope.checkHowMuch = function(){
     //$scope.displaymsg = "Welcome";
     //$scope.message == '' ? $scope.displaymsg = "Please enter data first" : checkSize($scope);
     $scope.lunchlist == '' ? $scope.displaymsg = "Please enter data first" : checksize($scope.lunchlist);

      function checksize(string){
        var splitContent = $scope.lunchlist.split(',');
        splitContent.length > 3 ? $scope.displaymsg = "Too much!" : $scope.displaymsg = "Enjoy!";
      }

    }

  }

})();
