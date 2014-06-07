var Message = Backbone.Model.extend({
  defaults: {
    sourceUser: defaultUser,
    room: defaultRoom,
    message: ''
  }
});

function sendMessage(user, room, message) {
  var message = new Message({
    sourceUser: user,
    room: room,
    message: message
  });
  // send message
}