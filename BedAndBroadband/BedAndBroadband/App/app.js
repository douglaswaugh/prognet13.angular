angular.module("bandb", [
    "ui.bootstrap"
]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/html/home.html",
        controller: HomeController,
        controllerAs: "dc"
    });
});
