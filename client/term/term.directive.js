(function(){
  'use strict'

  angular
    .module('app.term')
    .directive('wacTerm', TermDirective);

  function TermDirective() {
    var directive = {
      restrict: 'A',
      replace: true,
      templateUrl: 'term/term.html',
      controller: 'Term',
      controllerAs: 'term',
      bindToController: true,
      link: link
    };

    return directive;

    function link(scope, el, attr, termController) {
      scope.$watch(attr.wacTerm, function(termModel) {
        termController.init(termModel);
      });
    }
  }
})();