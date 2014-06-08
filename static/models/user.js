define([], function() {
  var User = Backbone.Model.extend({
    defaults: {
      inst : "",
      genr: "",
      uid: "",
      pos: {
        lat: 0,
        lon: 0
      }
    }
  });

  var defaultUser = new User();
  console.log('usersssss');
  return User;
});
