define([
  "views/geoView",
  "views/genreView",
  "views/mapView",
  "views/instrumentView"
], function(GeoView, GenreView, MapView, InstrumentView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      console.log("appView initialized");
      this.subView = new GeoView();
      this.render();
    },

    events: {
      "geo" : "gotoGeo",
      "instr": "instr",
    },

    render: function() {
      this.$el.html(this.subView.$el);
    },
    map: function() {
      var mapView = new MapView();
      this.$el.html(mapView.$el);      
    },
    instr: function(){
      this.subView = new InstrumentView();
      this.render();
    },
    genre: function() {
      this.subView = new GenreView();
      this.render();
    }
  });
});


