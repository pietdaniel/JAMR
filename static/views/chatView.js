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

      //send chat message
      var message = {
        "kind": "MESSAGE",
        "model": {
          "src_user": {
            "pos": {
              "lon": "1.0",
              "lat": "1.1"
            },
            "inst": "guitar",
            "genr": "rock",
            "uid": "1"
          },
          "room": {
            "users": [
              {
                "pos": {
                  "lon": "1.0",
                  "lat": "1.1"
                },
                "inst": "guitar",
                "genr": "rock",
                "uid": "1"
              }
            ],
            "uid": 1
          },
          "msg": "TEST MESSAGE"
        }
      }

      connection.send(JSON.stringify(message));

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


