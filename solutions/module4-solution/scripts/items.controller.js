(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
ItemsController.$inject = ['itemDetail'];
function ItemsController(itemDetail) {
  var itemsctrl = this;
  /*var promise = items;
  categoryList.items = promise.then(function(response){
    return response;
  }); */
  itemsctrl.items = itemDetail.short_name;

  console.log ("I am in itemDetail");
  console.log (itemDetail);
  console.log (itemDetail.short_name);

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
