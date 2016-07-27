(function(){
  'use strict';

  angular
    .module('app.calculator')
    .controller('Calculator', Calculator);

  /* @ngInject() */
  function Calculator(sectionService, $scope) {
    var vm = this;

    vm.activeSections = [];

    initialize();

    function initialize() {
      subscribeToSectionsUpdate();
      setActiveSections();
    }

    function subscribeToSectionsUpdate() {
      $scope.$on('sections:updated', setActiveSections);
    }

    function setActiveSections() {
      vm.activeSections = sectionService.getActiveSections();
    }
  }

})();