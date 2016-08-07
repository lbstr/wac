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
      var rawAnswer = getAnswer();
      vm.answer = formatAnswer(rawAnswer);
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

    function formatAnswer(answer) {
      if (answer == null) {
        return null;
      }

      var numDecimals = getNumDecimals(answer);
      var scale = Math.pow(10, numDecimals);
      var roundedAnswer = Math[answer < 0 ? 'ceil' : 'floor'](answer * scale) / scale;

      var formattedAnswer = roundedAnswer + '';
      if (roundedAnswer != answer) {
        formattedAnswer += '...';
      }

      return formattedAnswer;
    }

    function getNumDecimals(answer) {
      if (answer % 1 === 0) {
        return 0;
      }

      const MIN_NUMBER_OF_DECIMALS = 2;
      const MAX_NUMBER_OF_DECIMALS = 4;
      const MAX_NUMBER_OF_DIGITS = 7;

      var numberOfWholeNumbers = 1 + Math.floor(Math.log(Math.abs(answer)) / Math.log(10));

      var numberOfDecimals = Math.max(
          MIN_NUMBER_OF_DECIMALS, 
          Math.min(
            MAX_NUMBER_OF_DECIMALS, 
            MAX_NUMBER_OF_DIGITS - numberOfWholeNumbers));

      return numberOfDecimals;
    }
  }
})();