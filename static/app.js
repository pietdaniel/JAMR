var Jamr = Backbone.Router.extend({
  routes: {
    "geo": "geo"
  },

  geo: function() {
    console.log('GEOOOOO');
    var geoView = new GeoView({});
    $('#app').html(geoView.render().el);
  }
});
console.log('apppp');
var app_router = new Jamr();



Backbone.history.start({
  root: ''
});