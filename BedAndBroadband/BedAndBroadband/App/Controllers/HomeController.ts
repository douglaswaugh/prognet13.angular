/// <reference path="../references.ts" />

class HomeController{
    heading: string;
    hotels: Models.Hotel[];

    constructor($http: ng.IHttpService) {
        this.heading = "Recently rated";
        $http.get("/hotels/recentlyrated")
            .success((hotels) => {
                this.hotels = this.calculateAverageRating(hotels);
            });
    }

    private calculateAverageRating(hotels: Models.Hotel[]) {
        hotels.forEach((hotel: Models.Hotel) => {
            hotel.averageQuality =
                (hotel.ratings || [])
                    .map((r: Models.Rating) => r.quality)
                    .average();
        });
        return hotels;
    }
}