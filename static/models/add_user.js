var AddUser = Backbone.Model.extend({
  defaults: {
    model: defaultUser,
    type: 'add_user'
  }
});

function addUser(user) {
  user = new User();
  var userToAdd = new AddUser({model: user});
  sendMessage(userToAdd);
}