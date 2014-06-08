
define([
  "views/geoView",
  "views/genreView",
  "views/mapView"
], function(GeoView, GenreView, MapView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      console.log("appView initialized");
      this.subView = new GeoView();
      this.render();
    },

    render: function() {
      this.$el.html(this.subView.$el);
    },

    map: function() {
      var mapView = new MapView();
      this.$el.html(mapView.$el);      
    }
  });
});


