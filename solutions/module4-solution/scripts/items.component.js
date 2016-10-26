(function() {

'use sctrict';

angular.module('MenuApp')
.component('itemsList', {

  templateUrl: 'templates/itemDetails.html',
  //controller: itemsController As items,
  bindings: {
    itemContent : '<'
  }

} );
})();
