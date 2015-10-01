 'use strict';

angular.module('sampleelasticsearchApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleelasticsearchApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleelasticsearchApp-params')});
                }
                return response;
            }
        };
    });
