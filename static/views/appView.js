
define([
  "views/geoView",
  "views/instrumentView",
  "views/genreView"
], function(GeoView, InstrumentView, GenreView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      console.log("appView initialized");
      this.subView = new InstrumentView();
      this.render();
    },

    events: {
      "geo" : "gotoGeo",
      "instr": "instr",
    },

    render: function() {
      this.$el.html(this.subView.$el);
    },

    instr: function(){
      this.subView = new InstrumentView();
      this.render();
    },


  });
});


