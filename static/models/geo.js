var Geo = Backbone.Model.extend({
  defaults: {
    lat: 0,
    lon: 0
  }
});

var defaultGeo = new Geo();