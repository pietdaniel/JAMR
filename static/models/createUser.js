define([], function() {
  var CreateUser = Backbone.Model.extend({
    defaults: {
      kind: 'CREATE'
    }
  });
  return CreateUser;
});

