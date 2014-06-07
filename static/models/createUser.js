var CreateUser = Backbone.Model.extend({
  defaults: {
    model: defaultUser,
    kind: 'CREATE'
  }
});

function createUser(user) {
  var userToCreate = new CreateUser({model: user});
  sendMessage(userToCreate);
}