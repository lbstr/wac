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
      scope.$watch(attr.wacTerm, function(calcTerm) {
        term.init(calcTerm.key);
      });
    }
  }






  // angular
  //   .module('app.calculator')
  //   .directive('wacToggle', Toggle);

  // function Toggle(){
  //   var directive = {
  //     restrict: 'A',
  //     link: linkFunc
  //   };

  //   return directive;

  //   function linkFunc(scope, el, attr) {
  //     console.log(scope);
  //     console.log(el);
  //     console.log(attr);
  //     console.log($(el));
  //   }
  // }
})();