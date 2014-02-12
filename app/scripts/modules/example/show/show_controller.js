(function() {
    App.module('Example.Show', function (Show, App, Backbone, Marionette, $, _) {

        Show.Controller = App.Controllers.Show.extend({

            initialize: function(options) {
                this.region = options.region;
                this.View = Show.View;
                this.entity = App.request('entities:profile');

                this.showBaseView();
            },

            // these two methods are good candidates for scaffolding
            getBaseView: function() {
                return new this.View({
                    model: this.entity
                });
            },

            showBaseView: function() {
                var view = this.getBaseView();

                this.region.show(view);
            }
        });

    });
})(this);