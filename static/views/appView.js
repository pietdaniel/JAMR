
define([
  "views/geoView"
], function(GeoView){
  return Backbone.View.extend({
    tagName: "div",

    initialize: function () {
      console.log("appView initialized");
      this.subView = new GeoView();
      this.render() 
    },

    render: function() {
      this.$el.html(this.subView.$el);
    }
  });
});


