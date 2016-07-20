(function(){
  'use strict';

  angular
    .module('app.calculator')
    .controller('Calculator', Calculator);

  function Calculator() {
    var vm = this;

    vm.terms = [];

    addInitialTerm();

    function addInitialTerm() {
      var termNumber = vm.terms.length + 1;

      var defaultTerm = {
        name: '#' + termNumber,
        weight: 100,
        value: 100
      };

      vm.terms.push(defaultTerm);
    }
  }

  // FROM POC...
  //   Some of this will come in handy
  //
  //
  //
  // function Calculator() {
  //   var vm = this;

  //   vm.answer = null;
  //   vm.terms = [];
  //   vm.addTerm = addTerm;
  //   vm.calculate = calculate;

  //   function addTerm() {
  //     vm.terms.push({
  //       name: "Term " + (vm.terms.length + 1),
  //       weight: 5000,
  //       value: 0.05
  //     });

  //     calculate();
  //   }

  //   function calculate() {
  //     var weightTotal = 0;
  //     var combinedWeightFactor = 0;

  //     vm.terms.forEach(function(term) {
  //       var weight = +term.weight;
  //       var value = term.value == null ? 0 : +term.value;

  //       if (weight > 0) {
  //         weightTotal += weight;
  //         combinedWeightFactor += (weight * value);
  //       }
  //     });

  //     if (weightTotal > 0) {
  //       vm.answer = combinedWeightFactor / weightTotal;
  //     }
  //     else {
  //       vm.answer = null;
  //     }
  //   }
  // }
})();