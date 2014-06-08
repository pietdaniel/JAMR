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
    }

    render: function() {
      this.$el.html(this.template);
    }

    selectInstr: function(e) {
      debugger
    }
  });
});


