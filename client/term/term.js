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

    function init(key) {
      var term = termsService.getTerm(key);
console.log(key);
console.log(typeof key);
      if (!term) {
        throw 'Error: term not found';
      }

      vm.name = term.name;
      vm.weight = term.weight;
      vm.value = term.value;
    }
  }
})();