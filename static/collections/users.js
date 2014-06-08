define(["models/user.js"], 
  function(User){
    var Users = Backbone.Collection.extend({
      model: User,
    });
    return Users;
});
