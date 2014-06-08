define([], function() {
  var User = Backbone.Model.extend({
    defaults: {
      inst : "",
      genr: "",
      uid: "",
      pos: {
        lat: 0,
        lon: 0
      },
      marker: {},
    }
  });

  var defaultUser = new User();
  return User;
});
