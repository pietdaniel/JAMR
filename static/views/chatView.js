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
      "submit form": "submitChat",
      "keyup form" : "keyPressed"
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
    },

    keyPressed: function(e) {
      //listen for ESC key
      if (e.keyCode == 27) {
        this.trigger("closeChat");
      }
    }
  });
});


