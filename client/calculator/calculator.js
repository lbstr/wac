(function(){
  'use strict';

  angular
    .module('app.calculator')
    .controller('Calculator', Calculator);

  function Calculator() {
    var vm = this;

    vm.answer = null;
    vm.terms = [];
    vm.addTerm = addTerm;
    vm.calculate = calculate;

    function addTerm() {
      vm.terms.push({
        name: "Term " + (vm.terms.length + 1),
        balance: 5000,
        interest: 0.05
      });

      calculate();
    }

    function calculate() {
      var balanceTotal = 0;
      var combinedWeightFactor = 0;

      vm.terms.forEach(function(term) {
        var balance = +term.balance;
        var interest = term.interest == null ? 0 : +term.interest;

        if (balance > 0) {
          balanceTotal += balance;
          combinedWeightFactor += (balance * interest);
        }
      });

      if (balanceTotal > 0) {
        vm.answer = combinedWeightFactor / balanceTotal;
      }
      else {
        vm.answer = null;
      }
    }
  }
})();