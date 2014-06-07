var Jamr = Backbone.Router.extend({
  routes: {
    "": "geo"
  },

  geo: function() {
    console.log('GEOOOOO');
    var geoView = new GeoView({});
    $('#app').html(geoView.render().el);
  }
});

var app = new Jamr();