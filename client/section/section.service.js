(function(){
  'use strict';

  angular
    .module('app.section')
    .factory('sectionService', SectionService);

  function SectionService() {
    var sections = getSections();

    var service = {
      get: get
    };

    return service;

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
})();