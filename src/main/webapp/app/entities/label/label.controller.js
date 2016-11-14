(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['$scope', '$state', 'Label', 'LabelSearch'];

    function LabelController ($scope, $state, Label, LabelSearch) {
        var vm = this;

        vm.labels = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Label.query(function(result) {
                vm.labels = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            LabelSearch.query({query: vm.searchQuery}, function(result) {
                vm.labels = result;
            });
        }    }
})();
