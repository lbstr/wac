(function(){
  'use strict';

  angular
    .module('app.section')
    .factory('sectionService', SectionService);

  function SectionService() {
    var settingsSection = new SectionModel("settings", "Settings", "settings/settings.html");
    var adderSection = new SectionModel("adder", "Add", "adder/adder.html");
    var solutionSection = new SectionModel("solution", "Solution", "solution/solution.html");

    var activeSections = [
      settingsSection,
      adderSection,
      solutionSection
    ];

    var sections = getSections();

    var service = {
      get: get,
      getActiveSections: getActiveSections,
    };

    return service;

    function getActiveSections() {
      return activeSections;
    }



    function getSections() {
      var sections = {
        settings: {
          heading: 'Settings',
          templateUrl: 'settings/settings.html'
        },
        solution: {
          heading: 'Solution',
          templateUrl: 'solution/solution.html'
        },
        adder: {
          heading: 'Add',
          templateUrl: 'adder/adder.html'
        }
      };

      return sections;
    }

    function get(sectionId) {
      return sections[sectionId];
    }
  }

  function SectionModel(sectionId, heading, bodyTemplateUrl, data) {
    this.sectionId = sectionId;
    this.heading = heading;
    this.bodyTemplateUrl = bodyTemplateUrl;
    this.data = data || {};
  }

})();