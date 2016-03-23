(function() {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .controller('BankAccountController', BankAccountController);

    BankAccountController.$inject = ['$scope', '$state', 'BankAccount', 'BankAccountSearch'];

    function BankAccountController ($scope, $state, BankAccount, BankAccountSearch) {
        var vm = this;
        vm.bankAccounts = [];
        vm.loadAll = function() {
            BankAccount.query(function(result) {
                vm.bankAccounts = result;
            });
        };

        vm.search = function () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            BankAccountSearch.query({query: vm.searchQuery}, function(result) {
                vm.bankAccounts = result;
            });
        };
        vm.loadAll();
        
    }
})();
