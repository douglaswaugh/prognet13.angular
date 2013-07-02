module Models {
    export interface Rating {
        quality: number;
    }
    export interface Hotel {
        id: number;
        name: string;
        ratings: Rating[];
        wired: bool;
        wireless: bool;
        averageQuality: number;
    }
}