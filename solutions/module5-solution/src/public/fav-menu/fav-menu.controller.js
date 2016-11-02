(function () {
"use strict";

angular.module('public')
.controller('FavMenuController', FavMenuController);

FavMenuController.$inject = ['fovourite'];
function FavMenuController(fovourite) {
  var $ctrl = this;
  $ctrl.favMenuItem = fovourite;

}


})();
