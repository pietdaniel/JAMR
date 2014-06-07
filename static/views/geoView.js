var GeoView = Backbone.View.extend({
  tagName: "div",


  render: function() {
    var template = _.template( $("#hello").html(), {} );
    // Load the compiled HTML into the Backbone "el"
    this.$el.html( template );
    return this;
  }
});