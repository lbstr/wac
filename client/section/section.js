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

    function init(sectionModel) {
      vm.heading = sectionModel.heading;
      vm.templateUrl = sectionModel.bodyTemplateUrl;
    }

    function toggle() {
      vm.isOpen = !vm.isOpen;
    }
  }
})();