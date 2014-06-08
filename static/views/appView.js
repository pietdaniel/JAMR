define([
  "models/user",
  "collections/users",
  "views/geoView",
  "views/instrumentView",
  "views/genreView",
  "views/chatView",
  "views/MapView",
], function(User, Users, GeoView, InstrumentView, GenreView, ChatView, MapView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      this.subView = new GeoView();
      this.geo = "";
      this.me = new User();
      this.users = new Users();
      var self = this;

      if (navigator.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(function(position) {
          self.geo = position;
        });
        console.log(pos);
      } else {
        console.log('cannot get location');
      }
      this.render();
    },

    events: {
      "geo" : "gotoGeo",
      "instr": "instr",
    },

    render: function() {
      this.$el.html(this.subView.$el);
    },

    map: function(instrument, genre) {
      var mapView = new MapView();
      this.subView = mapView;
      mapView.setGeo(this.geo);
      //console.log(this.geo);
      mapView.render()
      this.$el.html(mapView.$el);
      mapView.createUser(this.geo, instrument, genre);
    },

    instr: function(){
      this.subView = new InstrumentView();
      this.render();
    },

    genre: function(instrument) {
      this.subView = new GenreView();
      this.subView.setInstrument(instrument);
      this.render();
    }
  });
});


