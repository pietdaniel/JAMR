define([
  "text!templates/map.html",
  "assets/js/leaflet.js",
  "lib/sockets.js",
  "models/user.js",
  "models/createUser.js",
  "collections/users.js"
], function(template, leaflet, Sockets, User, CreateUser, UsersCollection){
  return Backbone.View.extend({
    tagName: "div",
    template: Handlebars.compile(template),
    usersCollection: [],

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
      var jsonUsers = JSON.parse(users);
      this.usersCollection = new UsersCollection(jsonUsers);
      this.geo = geo;
      console.log(instrument + genre);
      console.log(geo);
      var user = new User({
        inst: instrument,
        genr: genre,
        pos: {
          lat: geo.coords.latitude.toString(),
          lon: geo.coords.longitude.toString()
        },
        uid: new Date().getTime()
      });
      var createUser = new CreateUser({
        model: user
      });
      sendMessage(createUser);
      this.render();
    },

    render: function() {
      this.$el.html( this.template({geo: this.geo, users: this.usersCollection}) );
      this.delegateEvents();
      return this;
    },
  });
});
