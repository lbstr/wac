(function(){
  'use strict'

  angular
    .module('app.services')
    .factory('termsService', TermsService);

  /* @ngInject() */
  function TermsService($rootScope) {
    var terms = [];
    var id = 1;

    var service = {
      getTerms: getTerms,
      addDefaultTerm: addDefaultTerm,
      addTerm: addTerm,
      getTerm: getTerm,
      updateTerm: updateTerm,
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
      broadcast('add');
    }

    function getTerm(key) {
      var term = null;

      operate(key, function(index) {
        term = terms[index];
      });

      return term;
    }

    function updateTerm(key, term) {
      operate(key, function(index, oldTerm) {
        oldTerm.name = term.name;
        oldTerm.weight = term.weight;
        oldTerm.value = term.value;
        broadcast('update');
      });
    }

    function deleteTerm(key) {
      operate(key, function(index) {
        terms.splice(index, 1);
        broadcast('delete');
      });
    }

    /*
     * Find the term by its key, 
     * then perform the given operation.
     *
     * This is a result of storing terms
     * in an array. Consider switching to
     * an object as we'll save ourselves
     * from iterating the entire list on
     * most operations. 
     */
    function operate(key, operation) {
      if (key == null || key.length === 0) {
        throw 'Error: invalid key supplied';
      }

      var i = terms.length;

      while(i--) {
        if (terms[i].key === key) {
          operation(i, terms[i], key);
          return true;
        }
      }

      return false;
    }

    function broadcast(eventType) {
      $rootScope.$broadcast('terms:' + eventType, terms);
    }
  }
})();