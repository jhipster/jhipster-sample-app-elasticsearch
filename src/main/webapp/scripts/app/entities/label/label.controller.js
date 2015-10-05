'use strict';

angular.module('sampleelasticsearchApp')
    .controller('LabelController', function ($scope, Label, LabelSearch) {
        $scope.labels = [];
        $scope.loadAll = function() {
            Label.query(function(result) {
               $scope.labels = result;
            });
        };
        $scope.loadAll();

        $scope.delete = function (id) {
            Label.get({id: id}, function(result) {
                $scope.label = result;
                $('#deleteLabelConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Label.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteLabelConfirmation').modal('hide');
                    $scope.clear();
                });
        };

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
