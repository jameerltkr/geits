'use strict';

angular.module('config', ['homeService'])

.constant('ENV', {
  'appName': 'GEITS',
  'apiBaseUrl': 'http://localhost:3003/'
});