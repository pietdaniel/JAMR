var defaultGeo = new Geo();
var User = Backbone.Model.extend({
  defaults: {
    inst : "",
    genr: "",
    uid: "",
    pos: defaultGeo
  }
});

var defaultUser = new User();