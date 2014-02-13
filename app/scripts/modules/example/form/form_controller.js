(function() {
    App.module('Example.Form', function (Form, App, Backbone, Marionette, $, _) {

        Form.Controller = App.Controllers.Base.extend({

            initialize: function(options) {
                this.region = options.region;
                this.View = Form.View;
                this.entity = App.request('entities:profile');

                // would be wrapped in a promise, but using fake data
                this.entity.fetch();
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