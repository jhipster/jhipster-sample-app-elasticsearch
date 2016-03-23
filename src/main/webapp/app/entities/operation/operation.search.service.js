(function() {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .factory('OperationSearch', OperationSearch);

    OperationSearch.$inject = ['$resource'];

    function OperationSearch($resource) {
        var resourceUrl =  'api/_search/operations/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
