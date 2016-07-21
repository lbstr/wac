(function(){
  'use strict';

  angular
    .module('app.calculator')
    .controller('Calculator', Calculator);

  /* @ngInject() */
  function Calculator(termsService) {
    var vm = this;

    initialize();

    vm.terms = termsService.getTerms();
    vm.addTerm = addTerm;

    function initialize() {
      addTerm();
    }

    function addTerm() {
      termsService.addDefaultTerm();
    }
  }
})();