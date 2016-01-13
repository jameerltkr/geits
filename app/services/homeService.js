'use strict';

var homeService = angular.module('homeService', [])

homeService.service('getHomeDataService', function ($http, ENV) {

    this.getData = function () {
        return $http.get(ENV.apiBaseUrl + "home/getHomeData");
    }

})



