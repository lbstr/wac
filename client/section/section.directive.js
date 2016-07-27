(function(){
  'use strict';

  angular
    .module('app.section')
    .directive('wacSection', SectionDirective);

  function SectionDirective() {
    var directive = {
      restrict: 'A',
      replace: true,
      templateUrl: 'section/section.html',
      controller: 'Section',
      controllerAs: 'section',
      link: link,
      scope: {
        sectionModel: '=wacSection'
      }
    };

    return directive;

    function link(scope, el, attr, section) {
      section.init(scope.sectionModel);
    }
  }
})();