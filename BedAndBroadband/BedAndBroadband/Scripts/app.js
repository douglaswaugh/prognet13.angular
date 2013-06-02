var HomeController = (function () {
    function HomeController($http) {
        var _this = this;
        this.heading = "Recently rated";
        $http.get("/hotels/recentlyrated").success(function (hotels) {
            _this.hotels = hotels;
        });
    }
    return HomeController;
})();
angular.module("bandb", [
    "ui.bootstrap"
]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/html/home.html",
        controller: HomeController,
        controllerAs: "dc"
    });
});
