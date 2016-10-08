(function() {
  'use sctrict'
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;

    buy.toBuy = ShoppingListCheckOffService.showItem();
    buy.boughtItem = function(value) {
      ShoppingListCheckOffService.boughtItem(value);
      buy.toBuyEmpty = ShoppingListCheckOffService.setbuyEmpty();

    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;

    alreadyBought.bought = ShoppingListCheckOffService.showboughtList();
    alreadyBought.toBoughtEmpty = function(){
        return ShoppingListCheckOffService.setboughtEmpty();
    }

  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
      {
        name: "cookies",
       quantity: 6
      },
      {
       name: "chips",
       quantity: 5
      },
      {
        name: "chocos",
        quantity: 4
      },
      {
        name: "Pizza",
       quantity: 2
      },
      {
        name: "cheese",
        quantity: 10
      }
    ];
    var bought = [];
    var buyEmpty = false;
    var boughtEmpty = true;

    service.showItem = function() {
       return toBuy;
    }

    service.boughtItem = function(value) {
      bought.push(value);
      boughtEmpty = false;
      service.removeItem(value);
      if (toBuy.length === 0){
        buyEmpty = true;
      }
    }

    service.showboughtList = function(){
      return bought;
    }

    service.removeItem = function(item) {
      var remIndex = toBuy.indexOf(item);
      if (remIndex > -1) {
        toBuy.splice(remIndex, 1);
      }
    }

    service.setbuyEmpty = function(){
      return buyEmpty;
    }

    service.setboughtEmpty = function(){
      return boughtEmpty;
    }
  }

})();
