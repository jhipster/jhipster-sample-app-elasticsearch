(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['Label', 'LabelSearch'];

    function LabelController(Label, LabelSearch) {

        var vm = this;

        vm.labels = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Label.query(function(result) {
                vm.labels = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            LabelSearch.query({query: vm.searchQuery}, function(result) {
                vm.labels = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
