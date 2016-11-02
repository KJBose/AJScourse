(function () {
"use strict";

angular.module('common')
.service('UserDataService', UserDataService);


UserDataService.$inject = [];
function UserDataService() {
  var userService = this;
  userService.savedData = '';
  //service.savedData ={};

  userService.saveUserData = function (userData) {
    //think service implementation?
    /*return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });*/
    //console.log("I am here to save Data");
    userService.savedData = userData;
    //console.log("userService.savedData", userService.savedData);
    return true;
  };

  userService.getUserData = function () {
    // retrive saved user data
    /*return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });*/
    //console.log("userService.savedData is", userService.savedData);
    return userService.savedData;
  };

  /*userService.getUserData = function (userData) {
    // retrive saved user data
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });

  };*/

}



})();
