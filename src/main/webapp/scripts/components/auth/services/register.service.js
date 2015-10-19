'use strict';

angular.module('sampleElasticSearchApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


