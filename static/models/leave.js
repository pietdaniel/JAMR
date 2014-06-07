var Leave = Backbone.Model.extend({
  defaults: {
    kind: 'LEAVE',
    model: defaultUser,
    room: defaultRoom
  }
});

function leave(user, room) {
  var leave = new Leave({model: user, room: room});
  sendMessage(leave);
}