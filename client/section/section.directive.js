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
      bindToController: true,
      link: link
    };

    return directive;

    function link(scope, el, attr, section) {
      scope.$watch(attr.wacSection, function(sectionModel) {
        section.init(sectionModel);
      });
    }
  }
})();