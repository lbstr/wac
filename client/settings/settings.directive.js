(function(){
  'use strict'

  angular
    .module('app.settings')
    .directive('wacSettings', Settings);

  function Settings() {
    var directive = {
      restrict: 'A',
      templateUrl: 'settings/settings.html',
      controller: 'Settings',
      controllerAs: 'settings',
      bindToController: true,
      replace: true
    };

    return directive;
  }
})();