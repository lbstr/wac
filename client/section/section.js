(function(){
  'use strict';

  angular
    .module('app.section')
    .controller('Section', Section);

  /* @ngInject() */
  function Section(sectionService) {
    var vm = this;

    vm.heading = 'Loading...';
    vm.templateUrl = '';
    vm.isOpen = false;
    vm.init = init;
    vm.toggle = toggle;

    function init(sectionId) {
      if (!sectionId || sectionId.length === 0) {
        throw 'Empty section ID';
      }

      var sectionModel = sectionService.get(sectionId);

      if (!sectionModel) {
        throw 'Invalid section ID';
      }

      vm.heading = sectionModel.heading;
      vm.templateUrl = sectionModel.templateUrl;
    }

    function toggle() {
      vm.isOpen = !vm.isOpen;
    }
  }
})();