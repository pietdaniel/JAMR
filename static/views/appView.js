
define([
  "views/geoView",
  "views/instrumentView",
  "views/genreView",
  "views/chatView"
], function(GeoView, InstrumentView, GenreView, ChatView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      console.log("appView initialized");
      this.subView = new ChatView();
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

    genre: function(){
      this.subView = new GenreView();
      this.render();
    }

  });
});


