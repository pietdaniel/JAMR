var AddUser = Backbone.Model.extend({
  defaults: {
    model: defaultUser,
    type: 'add_user'
  }
});

function addUser(user) {
  var userToAdd = new AddUser({model: user});
  console.log(userToAdd);
  // send message
}