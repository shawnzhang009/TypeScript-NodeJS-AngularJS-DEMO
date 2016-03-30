(function() {
    'use strict';


    angular
        .module('app.components')
        .factory('Login', Login);

    /* @ngInject */
    Login.$inject = ['$resource'];

    function Login($resource) {
        return $resource('test-data/oms/ws/login', {}, {
            check: {
                method: 'GET',
                params: {
                    // phoneId: 'phones'
                },
                isArray: false
            }
        });
    }

})();