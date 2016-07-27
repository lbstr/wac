(function(){
  'use strict'

  angular
    .module('app.term')
    .controller('Term', Term);

  /* @ngInject() */
  function Term($scope, termsService) {
    var vm = this;
    var termModel = $scope.sectionModel.data;

    vm.name = termModel.name;
    vm.weight = termModel.weight;
    vm.value = termModel.value;
    vm.update = update;
    vm.remove = remove;

    function update() {
      termsService.updateTerm(termModel.key, {
        name: vm.name,
        weight: vm.weight,
        value: vm.value
      });
    }

    function remove() {
      termsService.deleteTerm(termModel.key);
    }
  }
})();