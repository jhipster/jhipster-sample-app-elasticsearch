 'use strict';

angular.module('sampleElasticSearchApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleElasticSearchApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleElasticSearchApp-params')});
                }
                return response;
            }
        };
    });
