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
    vm.toggleSection = toggleSection;

    function initialize() {
      addTerm();
    }

    function addTerm() {
      termsService.addDefaultTerm();
    }

    function toggleSection(asdf){
      console.log("Toggle Section");
      console.log(asdf);
    }
  }

})();