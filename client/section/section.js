(function(){
  'use strict';

  angular
    .module('app.section')
    .controller('Section', Section);

  /* @ngInject() */
  function Section($rootScope) {
    var vm = this;

    vm.sectionId = null;
    vm.heading = 'Loading...';
    vm.templateUrl = '';
    vm.expandable = true;
    vm.isOpen = false;

    vm.init = init;
    vm.toggle = toggle;

    function init(sectionModel) {
      vm.sectionId = sectionModel.sectionId;
      vm.heading = sectionModel.heading;
      vm.templateUrl = sectionModel.bodyTemplateUrl;
      vm.expandable = sectionModel.expandable === undefined ? true : sectionModel.expandable;
      vm.isOpen = sectionModel.isExpanded === undefined ? false : sectionModel.isExpanded;
    }

    function toggle() {
      $rootScope.$broadcast('section:toggle', vm.sectionId);

      if (!vm.expandable) {
        return;
      }

      vm.isOpen = !vm.isOpen;
    }
  }
})();