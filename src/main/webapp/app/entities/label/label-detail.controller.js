(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp')
        .controller('LabelDetailController', LabelDetailController);

    LabelDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Label', 'Operation'];

    function LabelDetailController($scope, $rootScope, $stateParams, previousState, entity, Label, Operation) {
        var vm = this;

        vm.label = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterElasticsearchSampleApplicationApp:labelUpdate', function(event, result) {
            vm.label = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
