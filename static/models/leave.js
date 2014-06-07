var Leave = Backbone.Model.extend({
  defaults: {
    type: 'leave',
    model: defaultUser
  }
});

function leave(user) {
  var leave = new Leave({model: user});
  sendMessage(leave);
}