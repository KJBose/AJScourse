(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
CategoryController.$inject = ['$scope','categoryItems'];
function CategoryController($scope, categoryItems) {
  var category = this;
  //var promise = items;
  /*items.then(function(response){
    category.items =  response;
  });*/
  category.items = categoryItems;
  console.log (category.items);
  //console.log (category.items[0].special_instructions);

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
  category.giveCatShortName = function(item){

    $scope.selSName = item.short_name;
    console.log(" I reached here with sName", $scope.selSName);
  };
}

})();
