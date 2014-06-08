define(["models/user.js"], 
  function(User){
    var Users = Backbone.Collection.extend({
      model: User
    });
    console.log('colecenwv;');
    return Users;
});
