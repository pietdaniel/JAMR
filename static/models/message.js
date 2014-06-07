var Message = Backbone.Model.extend({
  defaults: {
    kind: 'message',
    model: {
      sourceUser: defaultUser,
      room: defaultRoom,
      message: ''
    }
  }
});

function sendMessage(user, room, message) {
  var message = new Message({
    model: {
      sourceUser: user,
      room: room,
      message: message
    }
  });
  sendMessage(message);
}