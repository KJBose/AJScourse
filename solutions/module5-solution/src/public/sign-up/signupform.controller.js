(function () {
"use strict";

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['$state', 'MenuService', 'UserDataService'];
function SignUpFormController($state, MenuService, UserDataService) {
  var $ctrl = this;
  $ctrl.user = {
  firstname:'',
  lastname:'',
  email:'',
  phonenumber:'',
  favdish:'',
  userselectedDish:''
 }
  $ctrl.user.firstname = '';
  $ctrl.user.lastname = '';
  $ctrl.user.email = '';
  $ctrl.user.phonenumber = '';
  $ctrl.user.favdish = '';
  $ctrl.userSaved = '';
  $ctrl.menuNotExist = '';

  //$ctrl.user = {};
  /*$ctrl.userInput = userInput;
  $ctrl.signUpComplete = false;*/
  //console.log(" I came to ctrl");
  $ctrl.go = function(userdata) {
    //console.log("entere the Go function");
    $ctrl.signUpComplete = true;
    var promise = MenuService.getMenuItems(userdata);
    promise.then(function (response){
      $ctrl.user.userselectedDish = response;
      //console.log('selected dish details', $ctrl.user.userselectedDish);
      if($ctrl.user.userselectedDish.category != '') {
        UserDataService.saveUserData($ctrl.user);
        $ctrl.userSaved = true;
      } else {
        $ctrl.menuNotExist = true;
      }
    });


  }

}


})();
