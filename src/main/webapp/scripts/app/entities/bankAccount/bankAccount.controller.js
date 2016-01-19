'use strict';

angular.module('sampleelasticsearchApp')
    .controller('BankAccountController', function ($scope, $state, BankAccount, BankAccountSearch) {

        $scope.bankAccounts = [];
        $scope.loadAll = function() {
            BankAccount.query(function(result) {
               $scope.bankAccounts = result;
            });
        };
        $scope.loadAll();


        $scope.search = function () {
            BankAccountSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.bankAccounts = result;
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
            $scope.bankAccount = {
                name: null,
                balance: null,
                id: null
            };
        };
    });
