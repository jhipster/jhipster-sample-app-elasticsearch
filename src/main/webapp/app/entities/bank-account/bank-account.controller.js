(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('BankAccountController', BankAccountController);

    BankAccountController.$inject = ['BankAccount', 'BankAccountSearch'];

    function BankAccountController(BankAccount, BankAccountSearch) {

        var vm = this;

        vm.bankAccounts = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            BankAccount.query(function(result) {
                vm.bankAccounts = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            BankAccountSearch.query({query: vm.searchQuery}, function(result) {
                vm.bankAccounts = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
