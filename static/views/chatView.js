define([
  "text!templates/chat.html"
], function(template){
  return Backbone.View.extend({
    tagName: "div",

    template: template,

    initialize: function () {
      console.log("chatView initialized")
      this.render();
    },

    events: {
      "submit form": "submitChat" 
    },

    render: function() {
      this.$el.html(this.template);
      this.delegateEvents();
    },

    submitChat: function(e) {
      //log input then clear it
      e.preventDefault();
      var input = $(e.currentTarget.children[0]);
      console.log(input.val());
      input.val("");
    }
  });
});


