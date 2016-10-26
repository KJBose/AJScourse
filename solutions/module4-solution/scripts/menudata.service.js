(function() {
  'use sctrict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q', '$http']
  function MenuDataService($q, $http) {
    var itemsData = this;
    itemsData.getAllCategories = function() {
      //console.log("In MenuDataService");
      return $http({
             method: "GET",
             url: "https://davids-restaurant.herokuapp.com/categories.json"
       }).then(function (result) {
       // process result and only keep items that match
       //console.log(result.data);
       var foundItems = result.data;
         return foundItems;
       });

   }

   itemsData.getItemsForCategory = function (categoryShortName) {

    var deferred = $q.defer();
    console.log("I am in getItemsForCategory");
    var promise = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      params: {
        category: categoryShortName
      }
    });
    promise.then(function (response){
      deferred.resolve({
        menuItems: response.data.menu_items,
        name: response.data.category.name
      });
    });
    console.log("menuitems is", menuItems);
    return deferred.promise;
  };

  }
})();
