(function() {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .factory('JhiHealthService', JhiHealthService);

    JhiHealthService.$inject = ['$rootScope', '$http'];

    function JhiHealthService ($rootScope, $http) {
        var service = {
            checkHealth: checkHealth
        };

        return service;

        function checkHealth () {
            return $http.get('health').then(function (response) {
                return response.data;
            });
        }
    }
})();
