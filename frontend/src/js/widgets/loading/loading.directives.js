(() => {
    angular
        .module('app.widgets')
        .directive("rdLoading", rdLoading);

    function rdLoading() {
        const d = {
            restrict: "AE",
            template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
        };
        return d
    }
})();
