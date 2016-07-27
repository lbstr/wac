(function(){
  'use strict'

  angular
    .module('app.adder')
    .controller('Adder', Adder);

  function Adder() {
    var vm = this;

    vm.addTerm = addTerm;

    function addTerm() {
      
    }
  }

})();