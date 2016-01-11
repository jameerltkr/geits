'use strict';

var homeService = angular.module('homeService', [])

.service('getPagesByBookName', function ($http, ENV) {
    //Get Pages
    this.getPages = function () {
        return $http.get(ENV.apiBaseUrl + "get-pages");
    }
})




