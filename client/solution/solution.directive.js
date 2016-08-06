(function(){
  'use strict'

  angular
    .module('app.solution')
    .directive('wacSolution', SolutionDirective);

  function SolutionDirective() {
    var directive = {
      restrict: 'A',
      replace: true,
      templateUrl: 'solution/solution.html',
      controller: 'Solution',
      controllerAs: 'solution',
      bindToController: true
    };

    return directive;
  }
})();