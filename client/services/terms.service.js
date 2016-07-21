(function(){
  'use strict'

  angular
    .module('app.services')
    .factory('termsService', TermsService);

  function TermsService() {
    var terms = [];
    var id = 1;

    var service = {
      getTerms: getTerms,
      addDefaultTerm: addDefaultTerm,
      addTerm: addTerm,
      getTerm: getTerm,
      deleteTerm: deleteTerm
    };

    return service;

    function getTerms() {
      return terms;
    }

    function addDefaultTerm() {
      var termNumber = terms.length + 1;

      var defaultTerm = {
        key: ('' + (id++)),
        name: '#' + termNumber,
        weight: 100,
        value: 100
      };

      addTerm(defaultTerm);
    }

    function addTerm(term) {
      terms.push(term);
    }

    function getTerm(key) {
      if (key == null || key.length === 0) {
        throw 'Error: invalid key supplied to TermsService.getTerm';
      }

      var i = terms.length;

      while(i--) {
        if (terms[i].key === key) {
          return terms[i];
        }
      }

      return null;
    }

    function deleteTerm(key) {
      if (key == null || key.length === 0) {
        throw 'Error: invalid key supplied to TermsService.deleteTerm';
      }

      var i = terms.length;

      while(i--) {
        if (terms[i].key === key) {
          terms.splice(i, 1);
          return true;
        }
      }

      return false;
    }
  }
})();