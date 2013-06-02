/// <reference path="references.ts" />

angular.module("bandb", ["ui.bootstrap"])
    .config(($routeProvider: ng.IRouteProvider) => {
        $routeProvider.when("/", {
            templateUrl: "/html/home.html",
            controller: HomeController,
            controllerAs: "dc" // data context
        });
    });