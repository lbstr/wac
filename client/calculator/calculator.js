(function(){
  'use strict';

  angular
    .module('app.calculator')
    .controller('Calculator', Calculator);

  /* @ngInject() */
  function Calculator(termsService) {
    var vm = this;

    vm.terms = [];
    vm.addTerm = addTerm;

    initialize();

    function initialize() {
      addTerm();
    }

    function addTerm() {
      termsService.addDefaultTerm();
      vm.terms = termsService.getTerms();
    }
  }

})();