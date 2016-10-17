(function() {
  'use sctrict'
  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'FoundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, MenuSearchService) {
    var narrow = this;
    narrow.isEmpty = false;
    narrow.returnEmpty = false;
    //narrow.found ='';
    $scope.searchTerm = '';
    //console.log("Hii");

     $scope.matchItems = function() {
       //console.log("Hii, button clicked!");
       //console.log("search term is", $scope.searchTerm);
      if($scope.searchTerm != '') {
      narrow.isEmpty = false;
       var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
       promise.then(function (response) {
         console.log("scope.searchTerm is", $scope.searchTerm);
         console.log("response.length is",  response.length);

         if (response.length == 0){
           narrow.found = '';
           narrow.returnEmpty = true;
         } else {
          narrow.found = response;
          console.log("found is", narrow.found);
          narrow.returnEmpty = false;
          }
        })
        } else {
       narrow.isEmpty = true;
       narrow.found = '';
     }
    };


    narrow.removeItem = function (itemIndex) {
        MenuSearchService.removeItem(itemIndex);
    };

    narrow.foundisEmpty = function() {
      //console.log("found is", narrow.found);
      if (narrow.isEmpty || narrow.returnEmpty) {
        //narrow.found = [];
        return true;
      } else {
        return false;
      }
    };

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {

    var service = this;
    service.returnEmpty = false;
    //service.foundItems = [];

    service.getMatchedMenuItems = function(searchTerm) {

      return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
      // process result and only keep items that match
      //console.log(result.data);
      var foundItems = service.finditems(searchTerm, result.data);
        return foundItems;
      });

    }

    service.finditems = function(searchTerm, httpdata) {
        //console.log("In finditemsfunction with", httpdata.menu_items);
      //console.log("length is", httpdata.menu_items.length);
      service.narrowedList = [];
      var name = "";

      for(var i = 0; i < httpdata.menu_items.length; i++) {

        name = httpdata.menu_items[i].description;
        console.log("name is", name);
        console.log("searchTerm is ", searchTerm );
        console.log("match String is", name.search(searchTerm));

        if(name.search(searchTerm) != -1) {
              //console.log("strexist");
              service.narrowedList.push(httpdata.menu_items[i]);
        }
      }
      //console.log("list is", narrowedList);
      //console.log(narrowedList[1].name);
      if(service.narrowedList == []) {
        service.returnEmpty = true;
      }
      return service.narrowedList;
    }

    service.isListEmpty = function() {
      return service.returnEmpty;
    }
    service.removeItem = function (itemIndex) {
        service.narrowedList.splice(itemIndex, 1);
    };
  }


})();
