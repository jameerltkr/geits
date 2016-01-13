angular.module("geits", ['config', 'homeService'])


.controller('homeApiController', function ($scope, $window, getHomeDataService) {
    $scope.message = "Hello";

    var homedata = getHomeDataService.getData();

    homedata.then(function (data) {
        //if (typeof page.data.data != "object")
         //   $scope.pages = page.data.data;
        //else
        //  $scope.pages = page.data.data[0].page_data;
        $scope.data = data.data;

        console.log('Test');
    }, function (err) {
        //$scope.pages = page.data.data[0].page_data;
        //    alert('Error while getting pages from database');
    });

})

.controller('mainController', function ($scope, $window) {
    $scope.message = "Hello";
})




