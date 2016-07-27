(function(){
  'use strict';

  angular
    .module('app.section')
    .factory('sectionService', SectionService);

  /* @ngInject() */
  function SectionService(termsService, $rootScope) {
    var settingsSection = new SectionModel("settings", "Settings", "settings/settings.html");
    var adderSection = new SectionModel("adder", "Add", "adder/adder.html", false);
    var solutionSection = new SectionModel("solution", "Solution", "solution/solution.html");

    var activeSections = [];

    var service = {
      getActiveSections: getActiveSections,
    };

    initialize();

    return service;

    function initialize() {
      termsService.addDefaultTerm();
      subscribeToSectionToggle();
      subscribeToTermsUpdate();
      setActiveSections();
    }

    function subscribeToSectionToggle() {
      $rootScope.$on('section:toggle', function(event, sectionId) {
        if (sectionId === 'adder') {
          termsService.addDefaultTerm();
          setActiveSections();
        }
      });
    }

    function subscribeToTermsUpdate() {
      $rootScope.$on('terms:add', setActiveSections);
      $rootScope.$on('terms:delete', setActiveSections);
    }

    function setActiveSections() {
      activeSections = [];

      activeSections.push(settingsSection);
      termsService.getTerms().forEach(addTermSection);
      activeSections.push(adderSection);
      activeSections.push(solutionSection);

      $rootScope.$broadcast('sections:updated', activeSections)
    }

    function getActiveSections() {
      return activeSections;
    }

    function addTermSection(term) {
      var termSection = new SectionModel(
        ("term-" + term.key),
        term.name,
        "term/term.html",
        true,
        true,
        term);

      activeSections.push(termSection);
    }
  }

  function SectionModel(sectionId, heading, bodyTemplateUrl, expandable, isExpanded, data) {
    this.sectionId = sectionId;
    this.heading = heading;
    this.bodyTemplateUrl = bodyTemplateUrl;
    this.expandable = expandable === undefined ? true : expandable;
    this.isExpanded = isExpanded === undefined ? false : isExpanded;
    this.data = data || {};
  }

})();