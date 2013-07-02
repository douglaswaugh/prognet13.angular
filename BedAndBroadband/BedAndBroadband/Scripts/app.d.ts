class HomeController {
    public heading: string;
    public hotels: Models.Hotel[];
    constructor($http: ng.IHttpService);
    private calculateAverageRating(hotels);
}
module Models {
    interface Rating {
        quality: number;
    }
    interface Hotel {
        id: number;
        name: string;
        ratings: Rating[];
        wired: bool;
        wireless: bool;
        averageQuality: number;
    }
}
