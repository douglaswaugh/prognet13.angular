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
