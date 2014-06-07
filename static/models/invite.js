var Invite = Backbone.Model.extend({
  defaults: {
    kind: 'INVITE',
    model: {
      src_user: defaultUser,
      dst_user: defaultUser,
    }
  }
});

function invite(sourceUser, destinationUser) {
  var invite = new Invite({
    model: {
      src_user: sourceUser,
      dst_user: destinationUser
    }
  });
  sendMessage(invite);
}