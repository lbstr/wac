(function(){
  'use strict'

  angular
    .module('app.solution')
    .directive('wacSolution', SolutionDirective);

  function SolutionDirective() {
    var directive = {
      restrict: 'A',
      templateUrl: 'solution/solution.html',
      controller: 'Solution',
      controllerAs: 'solution',
      bindToController: true,
      replace: true
    };

    return directive;
  }
})();