(function(){
  'use strict';

  angular
    .module('app.services')
    .factory('settingsService', settingsService);

  function settingsService() {
    var formats = Object.freeze({
      PERCENT: 'percent',
      NUMBER: 'number',
      CURRENCY: 'currency',
      RATIO: 'ratio'
    });

    var settings = getDefaultSettings();

    var service = {
      formats: formats,
      getSettings: getSettings,
      setWeightFormat: setWeightFormat,
      setValueFormat: setValueFormat
    };

    return service;

    function getDefaultSettings() {
      var defaultSettings = {
        weightFormat: formats.NUMBER,
        valueFormat: formats.NUMBER
      };

      return defaultSettings;
    }

    function getSettings() {
      return settings;
    }

    function setWeightFormat(weightFormat) {
      settings.weightFormat = weightFormat;
    }

    function setValueFormat(valueFormat) {
      settings.valueFormat = valueFormat;
    }
  }
})();