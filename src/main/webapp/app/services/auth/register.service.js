(function () {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
