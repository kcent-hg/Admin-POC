(function() {
    App.module('Example.Form', function (Form, App, Backbone, Marionette, $, _) {

        Form.View = App.Views.Form.extend({
            template: 'example/form',

            formViewContainer: '.example-form-region',

            initialize: function(options) {

                this.parameters = this.model.parameters();

            },

            onShow: function() {
                // this would be wrapped in a promise, 
                // but we're using fake data.
                this.parameters.fetch();

                this.buildForm();
            }
        });



    });
})(this);

