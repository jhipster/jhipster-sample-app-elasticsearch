'use strict';

angular.module('sampleelasticsearchApp')
    .factory('OperationSearch', function ($resource) {
        return $resource('api/_search/operations/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
