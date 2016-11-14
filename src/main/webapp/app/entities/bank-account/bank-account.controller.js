(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('BankAccountController', BankAccountController);

    BankAccountController.$inject = ['$scope', '$state', 'BankAccount', 'BankAccountSearch'];

    function BankAccountController ($scope, $state, BankAccount, BankAccountSearch) {
        var vm = this;

        vm.bankAccounts = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            BankAccount.query(function(result) {
                vm.bankAccounts = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            BankAccountSearch.query({query: vm.searchQuery}, function(result) {
                vm.bankAccounts = result;
            });
        }    }
})();
