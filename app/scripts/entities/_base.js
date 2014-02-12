(function() {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        // Scaffolding for extending Entities.
        // This is an optional way to handle a very repetitive method, like the getParameters.
        // Though, might want to call this something other than "Model" 
        // ... just not sure what! 
        Entities.Model = Backbone.Model.extend({

            getParameters: function(options) {
                return App.request('entities:parameters', options);
            }
        });


    });
})(this);