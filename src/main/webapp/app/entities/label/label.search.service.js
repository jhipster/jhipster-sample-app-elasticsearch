(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .factory('LabelSearch', LabelSearch);

    LabelSearch.$inject = ['$resource'];

    function LabelSearch($resource) {
        var resourceUrl =  'api/_search/labels/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
