define([
  "text!templates/map.html",
  "assets/js/leaflet.js",
  "lib/sockets.js",
  "models/user.js",
  "models/createUser.js"
], function(template, leaflet, Sockets, User, CreateUser){
  return Backbone.View.extend({
    tagName: "div",
    template: Handlebars.compile(template),

    initialize: function() {
      debugger
    },

    events: {

    },


    setPosition: function(position) {
      return position;
    },

    setMap: function(position) {
      console.log(position);
    },

    createUser: function(geo, instrument, genre) {
      this.geo = geo;
      console.log(instrument + genre);
      console.log(geo);
      var user = new User({
        inst: instrument,
        genr: genre,
        pos: {
          lat: geo.coords.latitude.toString(),
          lon: geo.coords.longitude.toString()
        }
      });
      var createUser = new CreateUser({
        model: user
      });
      sendMessage(createUser);
    },

    render: function() {
      this.$el.html( this.template({geo: this.geo}) );
      this.delegateEvents();
      return this;
    },
  });
});
