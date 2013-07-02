var HomeController = (function () {
    function HomeController($http) {
        var _this = this;
        this.heading = "Recently rated";
        $http.get("/hotels/recentlyrated").success(function (hotels) {
            _this.hotels = _this.calculateAverageRating(hotels);
        });
    }
    HomeController.prototype.calculateAverageRating = function (hotels) {
        hotels.forEach(function (hotel) {
            hotel.averageQuality = (hotel.ratings || []).map(function (r) {
                return r.quality;
            }).average();
        });
        return hotels;
    };
    return HomeController;
})();
