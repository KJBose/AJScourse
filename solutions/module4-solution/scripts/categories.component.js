(function() {

'use sctrict';

angular.module('MenuApp')
.component('categoriesList', {

  templateUrl: 'templates/items.html',
  //controller: categoryController As categories
  bindings: {
    items: '<'
  }
});

})();
