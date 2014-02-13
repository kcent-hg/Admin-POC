(function() {
    App.module('Views.Form', function (Form, App, Backbone, Marionette, $, _) {
        

        Form.BaseView = App.Views.ItemView.extend({
            className: 'form-group',

            serializeData: function() {
                // this basically makes all options, model data, and default params 
                // visible to the view, for easier customization in the template.
                return _.extend(this.model.toJSON(), this.options, this);
            }
        });

        Form.Input = Form.BaseView.extend({
            template: 'components/form/input',

            type: 'text',

            triggers: {
                'change input': 'update'
            }
        });

        // These names would correlate with the known parameter types 
        // retrieved from the service call.
        var API = {
            text: function(options) {
                return new Form.Input(options);
            }
        };

        // One request handler to elegantly retrieve any form view type
        App.reqres.setHandler('form:component:view', function(name, options) {
            if(API[name]) {
                return API[name](options);
            }
        });



    });
})(this);