(function(){
  'use strict'

  angular
    .module('app.term')
    .controller('Term', Term);

  function Term() {
    var vm = this;

    vm.name = 'Term';
    vm.weight = 100;
    vm.value = 100;
  }
})();