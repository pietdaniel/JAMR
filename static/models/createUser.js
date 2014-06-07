var CreateUser = Backbone.Model.extend({
  defaults: {
    model: defaultUser,
    type: 'create_user'
  }
});

function createUser(user) {
  var userToCreate = new CreateUser({model: user});
  sendMessage(userToCreate);
}