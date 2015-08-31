'use strict';

angular.module('sampleelasticsearchApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
