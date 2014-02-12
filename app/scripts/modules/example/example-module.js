(function() {
    App.module('Example', function (Example, App, Backbone, Marionette, $, _) {
        this.startWithParent = true;

        // Example.Router = Backbone.Marionette.AppRouter.extend({
        //     appRoutes: {
        //         "example(/)": "show"
        //     }
        // });

        var API = {
            show: function (options) {
                new Example.Show.Controller({
                    region: App.getRegion('mainContent')
                });
            }
        };

        App.addInitializer(function () {
            // new OnboardingApp.Router({
            //     controller: API
            // });

            App.commands.setHandler('example:show', function(options) {
                API.show(options);
            });
        });
    });
})(this);