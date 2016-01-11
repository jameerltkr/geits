angular.module("geits", ['config', 'homeService'])


.controller('homeApiController', ['$scope', '$http', function ($scope, $window, getPagesByBookName) {
    $scope.message = "Hello";

    //var pages = getPagesByBookName.getPages();

    //pages.then(function (page) {
    //    //if (typeof page.data.data != "object")
    //     //   $scope.pages = page.data.data;
    //    //else
    //      //  $scope.pages = page.data.data[0].page_data;
    //}, function (err) {
    //    //$scope.pages = page.data.data[0].page_data;
    //    //    alert('Error while getting pages from database');
    //});

}])

.controller('mainController', function ($scope, $window) {
    $scope.message = "Hello";
})

.service('getPagesByBookName', function ($http, ENV) {
    //Get Pages
    this.getPages = function () {
        //return $http.get(ENV.apiBaseUrl + "get-pages?data=" + data);
    }
})



