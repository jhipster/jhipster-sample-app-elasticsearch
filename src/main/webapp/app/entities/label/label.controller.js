(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['$scope', '$state', 'Label', 'LabelSearch'];

    function LabelController ($scope, $state, Label, LabelSearch) {
        var vm = this;
        vm.labels = [];
        vm.loadAll = function() {
            Label.query(function(result) {
                vm.labels = result;
            });
        };

        vm.search = function () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            LabelSearch.query({query: vm.searchQuery}, function(result) {
                vm.labels = result;
            });
        };
        vm.loadAll();
        
    }
})();
