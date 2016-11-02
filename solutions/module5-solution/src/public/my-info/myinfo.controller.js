(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo', 'UserDataService'];
function MyInfoController(userInfo, UserDataService) {
  var infoCtrl = this;
  infoCtrl.userInfo = userInfo;
  //infoCtrl.userNotexist = true;

  //console.log("I came to MyInfo ctrl", userInfo.firstname);
  //console.log("userInfo is", infoCtrl.userInfo.email);

  if (infoCtrl.userInfo != '') {
    infoCtrl.userexist = true;
  } else {
    infoCtrl.userNotexist = true;
  }
}


})();
