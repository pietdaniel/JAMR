define([
  "text!templates/map.html",
  "assets/js/leaflet.js",
  "lib/sockets.js",
  "models/user.js",
  "models/createUser.js",
  "collections/users.js",
  "views/chatView",
], function(template, leaflet, Sockets, User, CreateUser, UsersCollection, ChatView){
  return Backbone.View.extend({
    tagName: "div",
    template: Handlebars.compile(template),
    usersCollection: [],

    initialize: function() {

    },

    events: {
      "click .leaflet-marker-icon": "clickIcon",
    },


    setPosition: function(position) {
      return position;
    },

    setMap: function(position) {
      console.log(position);
    },

    setGeo: function(geo) {
      this.geo = geo;
    },
    createUser: function(geo, instrument, genre) {
      //var jsonUsers = JSON.parse(users);
      var meIcon = L.icon({
            iconUrl: 'assets/img/icon512/me.png',

            iconSize:     [38, 95], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      /*
      for(var i = 0; i < users.length; i++){
        var marker = L.marker([users[i].pos.lon, users[i].pos.lat]);
        marker.addTo(window.map);
        users[i].marker = marker;
        console.log(users[i]);
        this.usersCollection.push({
          inst: users[i].inst
        });
      }*/
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
        uid: new Date().getTime().toString()
      });
      var createUser = new CreateUser({
        model: user
      });
      sendMessage(createUser);
      this.render();
    },

    render: function() {
      this.$el.html( this.template({geo: this.geo, users: this.usersCollection}) );

      //create new chat for now
      this.chat = new ChatView();
      this.listenTo(this.chat, "closeChat", this.closeChat);
      this.$el.find("#chat").html(this.chat.$el);

      this.delegateEvents();
      return this;
    },

    clickIcon: function(e) {
      e.preventDefault();
      var clickedUser = _.find(users, function(user){
        return (user.marker._icon == e.currentTarget);
      });
      console.log(clickedUser);
      
      //create a room
      //invite the user
      this.openChat();

    },

    openChat: function(){
      $("#map").animate({width: '60%'}, 200);
      $("#chat").animate({width: '40%'}, 200);
    },

    closeChat: function(){
      $("#map").animate({width: '100%'}, 200);
      $("#chat").animate({width: '0%'}, 200);
    }
  });
});
