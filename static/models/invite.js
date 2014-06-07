var Invite = Backbone.Model.extend({
  defaults: {
    type: 'invite',
    model: {
      sourceUser: defaultUser,
      destinationUser: defaultUser,
    }
  }
});

function invite(sourceUser, destinationUser) {
  var invite = new Invite({
    model: {
      sourceUser: sourceUser,
      destinationUser: destinationUser
    }
  });
  sendMessage(invite);
}