var GeoView = Backbone.View.extend({
  tagName: "div",
  template: "",

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});