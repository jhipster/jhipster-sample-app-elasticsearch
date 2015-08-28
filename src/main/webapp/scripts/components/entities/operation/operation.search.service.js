'use strict';

angular.module('jhipsterApp')
    .factory('OperationSearch', function ($resource) {
        return $resource('api/_search/operations/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
