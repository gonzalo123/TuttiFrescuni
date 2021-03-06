// Product
define([
    //Load with require.js:
    'hbars!templates/product'], // Template Product
    function(ProductTemplate) {

        var SeasonItem = Backbone.View.extend({

            tagName:"li",    

            render:function () {
                // Using Underscore we can compile our template with data model
                var compiledTemplate = ProductTemplate(this.model.toJSON());

                // Append our compiled template to this Views "el"
                this.$el.html(compiledTemplate);
                return this;
            }
        });

        // Our module now returns our item
        return SeasonItem;
});
