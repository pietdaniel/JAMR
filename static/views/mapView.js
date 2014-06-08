define([
  "text!templates/map.html",
  "assets/js/leaflet.js",
  "assets/js/handlebars-v1.3.0.js"
], function(template, leaflet, Handlebars){
  return Backbone.View.extend({
    tagName: "div",
    template: template,

    initialize: function() {
      this.render();
    },

    events: {

    },



    render: function() {
      this.$el.html( this.template );
      
      this.delegateEvents();
      return this;
    },
  });
});
