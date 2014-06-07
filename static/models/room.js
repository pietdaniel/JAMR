var Room = Backbone.Model.extend({
  defaults: {
    users: [],
    id: 0
  }
});

var defaultRoom = new Room();