(function(){
  'use strict';

  angular
    .module('app.settings')
    .controller('Settings', Settings);

  /* @ngInject */
  function Settings(settingsService) {
    var vm = this;

    var defaultSettings = settingsService.getSettings();

    vm.formats = settingsService.formats;
    vm.weightFormat = defaultSettings.weightFormat;
    vm.valueFormat = defaultSettings.valueFormat;

    vm.saveSettings = saveSettings;

    function saveSettings() {
      settingsService.setWeightFormat(vm.weightFormat);
      settingsService.setValueFormat(vm.valueFormat);
    }
  }
})();