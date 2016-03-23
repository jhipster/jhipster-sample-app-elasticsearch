(function() {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .factory('LabelSearch', LabelSearch);

    LabelSearch.$inject = ['$resource'];

    function LabelSearch($resource) {
        var resourceUrl =  'api/_search/labels/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
