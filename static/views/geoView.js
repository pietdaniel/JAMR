//filename: geoView.js

define([
  "text!templates/geo.html",
], function(template){
  return Backbone.View.extend({
    tagName: "div",
    template: template,

    initialize: function() {
      this.render();
    },

    events: {
      "click #get-started": "getStarted",
    },

    render: function() {
      //var template = _.template( $("#hello").html(), {} );
      // Load the compiled HTML into the Backbone "el"
      this.$el.html( this.template );
      return this;
    },

    getStarted: function() {
      this.remove();
      app.instr();
    }
  });
});

