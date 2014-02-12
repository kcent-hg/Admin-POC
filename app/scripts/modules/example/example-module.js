(function() {
    App.module('Example', function (Example, App, Backbone, Marionette, $, _) {
        this.startWithParent = true;

        // Example.Router = Backbone.Marionette.AppRouter.extend({
        //     appRoutes: {
        //         "example(/)": "show"
        //     }
        // });

        var API = {
            form: function (options) {
                new Example.Form.Controller({
                    region: App.getRegion('mainContent')
                });
            }
        };

        App.addInitializer(function () {
            // new Example.Router({
            //     controller: API
            // });

            App.commands.setHandler('example:form:show', function(options) {
                API.form(options);
            });
        });
    });
})(this);