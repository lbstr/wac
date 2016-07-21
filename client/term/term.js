(function(){
  'use strict'

  angular
    .module('app.term')
    .controller('Term', Term);

  /* @ngInject() */
  function Term(termsService) {
    var vm = this;

    vm.name = null;
    vm.weight = null;
    vm.value = null;
    vm.init = init;
    vm.update = update;
    vm.remove = remove;

    function init(key) {
      var term = termsService.getTerm(key);

      if (!term) {
        throw 'Error: term not found';
      }

      vm.key = key;
      vm.name = term.name;
      vm.weight = term.weight;
      vm.value = term.value;
    }

    function update() {
      termsService.updateTerm(vm.key, {
        name: vm.name,
        weight: vm.weight,
        value: vm.value
      });
    }

    function remove() {
      termsService.deleteTerm(vm.key);
    }
  }
})();