/// <reference path="../references.ts" />

class HomeController{
    heading: string;
    hotels: any;
    constructor($http: ng.IHttpService) {
        this.heading = "Recently rated";
        $http.get("/hotels/recentlyrated")
            .success((hotels) => {
                this.hotels = hotels;
            });
    }
}