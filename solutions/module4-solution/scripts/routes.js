(function() {

'use sctrict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  console.log("Hi.. I am in Router");
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'CategoryController as category',
    resolve: {
      categoryItems: ['MenuDataService', function(MenuDataService) {
        //console.log(MenuDataService.getAllCategories());
         return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemList', {
    //console.log(category.selSName);
    url: '/itemList/{index}',
    templateUrl: 'templates/itemList.html',
    controller: 'ItemsController as itemsctrl',
    resolve: {
      itemDetail: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        //console.log("category.selSName", category.selSName);
        return MenuDataService.getItemsForCategory(category.selSName)
         .then(function (itemDetail) {
                  return itemDetail[$stateParams.itemId];
                });
      }]
    }
  });

}

})();
