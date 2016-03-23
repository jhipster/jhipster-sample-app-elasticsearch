(function () {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
