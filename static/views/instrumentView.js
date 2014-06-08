define([
  "text!templates/instrument.html"
], function(template){
  return Backbone.View.extend({
    tagName: "div",

    template: template,

    initialize: function () {
      console.log("instrumentView initialized")
      this.render();
    },

    events: {
      "click .img-circle" : "selectInstr",
    },

    render: function() {
      this.$el.html(this.template);
      this.delegateEvents();
    },

    selectInstr: function(e) {
      e.preventDefault();
      console.log(e.currentTarget.getAttribute('data'));
      this.remove();
      app.genre(e.currentTarget.getAttribute('data'));
    }
  });
});


