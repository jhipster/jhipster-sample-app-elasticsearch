'use strict';

angular.module('sampleelasticsearchApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


