(function(){
  'use strict'

  angular
    .module('app.term')
    .controller('Term', Term);

  /* @ngInject() */
  function Term($scope, termsService) {
    var vm = this;
    var model = null;

    vm.key = null;
    vm.weight = null;
    vm.value = null;
    vm.init = init;
    vm.update = update;
    vm.remove = remove;

    function init(termModel) {
      model = termModel;

      vm.key = model.key;
      vm.weight = model.weight;
      vm.value = model.value;
    }

    function update() {
      if (!model) {
        return;
      }

      termsService.updateTerm(model.key, {
        weight: vm.weight,
        value: vm.value
      });
    }

    function remove() {
      if (!model) {
        return;
      }

      termsService.deleteTerm(model.key);
    }
  }
})();