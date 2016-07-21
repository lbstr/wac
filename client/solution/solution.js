(function(){
  'use strict'

  angular
    .module('app.solution')
    .controller('Solution', Solution);

  /* @ngInject() */
  function Solution(termsService, $scope) {
    var vm = this;

    initialize();

    vm.answer = calculateAnswer();

    function initialize() {
      subscribeToTermsUpdate();
    }

    function subscribeToTermsUpdate() {
      $scope.$on('terms:updated', function(event) {
        vm.answer = calculateAnswer();
      });
    }

    function calculateAnswer() {
      var terms = termsService.getTerms();
      var weightTotal = 0;
      var combinedWeightFactor = 0;

      terms.forEach(function(term) {
        var weight = +term.weight;
        var value = term.value == null ? 0 : +term.value;

        if (weight > 0) {
          weightTotal += weight;
          combinedWeightFactor += (weight * value);
        }
      });

      if (weightTotal > 0) {
        return combinedWeightFactor / weightTotal;
      }

      return null;
    }
  }
})();