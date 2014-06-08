define([], function() {
  var CreateUser = Backbone.Model.extend({
    defaults: {
      kind: 'ADD_USER'
    }
  });
  return CreateUser;
});

