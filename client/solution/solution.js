(function(){
  'use strict'

  angular
    .module('app.solution')
    .controller('Solution', Solution);

  /* @ngInject() */
  function Solution(termsService, $scope) {
    var vm = this;

    vm.answer = null;

    initialize();

    function initialize() {
      subscribeToTermsChange();
      updateAnswer();
    }

    function subscribeToTermsChange() {
      $scope.$on('terms:update', updateAnswer);
      $scope.$on('terms:delete', updateAnswer);
      $scope.$on('terms:add', updateAnswer);
    }

    function updateAnswer() {
      vm.answer = getAnswer();
    }

    function getAnswer() {
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