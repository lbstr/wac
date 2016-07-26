(function(){
  'use strict'

  angular
    .module('app.term')
    .directive('wacTerm', TermDirective);

  function TermDirective() {
    var directive = {
      restrict: 'A',
      templateUrl: 'term/term.html',
      controller: 'Term',
      controllerAs: 'term',
      bindToController: true,
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, term) {
      attr.$observe('termKey', function(key) {
        term.init(key);
      });
    }
  }
})();