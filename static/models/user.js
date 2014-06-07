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

function createUser(user) {
  // send user
}

function leave(user, room) {
  // send message to leave
}