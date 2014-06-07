require([
  "assets/js/jquery-1.11.1.min",
  "assets/js/bootstrap.min",
  "assets/js/handlebars-v1.3.0",
  "assets/js/backbone-min",
  "assets/js/underscore-min",
  "views/appView"
  ], function(util) {
    //loads resources and starts the app
    app = new AppView({
      "el": $("#app"),
    });
});