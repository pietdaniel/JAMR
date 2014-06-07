var User = Backbone.Model.extend({
  defaults: {
    "instr" : "",
    "genr": "",
    "uid": "",
    "posn": {
      "lat": 0,
      "lon": 0
    }
  }
});

var defaultUser = new User();