define([
  "text!templates/map.html",
  "assets/js/leaflet.js",
  "assets/js/handlebars-v1.3.0.js"
], function(template, leaflet){
  return Backbone.View.extend({
    tagName: "div",
    template: Handlebars.compile(template),

    initialize: function() {
      
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
    },

    render: function() {
      this.$el.html( this.template({geo: this.geo}) );
      
      this.delegateEvents();
      return this;
    },
  });
});
