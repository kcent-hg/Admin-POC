(function() {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        // Scaffolding for extending Entities.
        // This is an optional way to handle a very repetitive method, like the parameters.
        // Though, might want to call this something other than "Model" 
        // ... just not sure what, lol.
        Entities.Model = Backbone.Model.extend({

            parameters: function(options) {
                return App.request('entities:parameters', options);
            }
        });


    });
})(this);