var AddUser = Backbone.Model.extend({
  defaults: {
    model: defaultUser,
    kind: 'ADD_USER'
  }
});

function addUser(user) {
  user = new User();
  var userToAdd = new AddUser({model: user});
  sendMessage(userToAdd);
}