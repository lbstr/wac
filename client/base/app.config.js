(function(){
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    // don't use the # in the url
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to calc
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
      .state('calc', {
        url: '/',
        templateUrl: 'calculator/calculator.html'
      })
      .state('calc.settings', {
        templateUrl: 'settings/settings.html'
      })
      .state('calc.term', {
        templateUrl: 'term/term.html'
      })
      .state('calc.add-term', {
        templateUrl: 'add-term/add-term.html'
      })
      .state('calc.solution', {
        templateUrl: 'solution/solution.html'
      });
  };
})();