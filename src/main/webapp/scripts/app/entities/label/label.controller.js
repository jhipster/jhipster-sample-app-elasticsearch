'use strict';

angular.module('sampleelasticsearchApp')
    .controller('LabelController', function ($scope, $state, Label, LabelSearch) {

        $scope.labels = [];
        $scope.loadAll = function() {
            Label.query(function(result) {
               $scope.labels = result;
            });
        };
        $scope.loadAll();


        $scope.search = function () {
            LabelSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.labels = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.label = {
                label: null,
                id: null
            };
        };
    });
