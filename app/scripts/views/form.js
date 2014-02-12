(function() {
    App.module('Views', function (Views, App, Backbone, Marionette, $, _) {

        // For slicing `arguments` in functions
        var protoSlice = Array.prototype.slice;
        function slice(args) {
            return protoSlice.call(args);
        }


        Views.Form = App.Views.Layout.extend({
            constructor: function() {
                // we want to do all our custom stuff AFTER 
                // marionette does it's default layout stuff
                Marionette.Layout.prototype.constructor.apply(this, slice(arguments));

                if(this.formViewContainer) {
                    this.regions = _.extend(this.regions, {
                        formViewContainer: this.formViewContainer
                    });
                }
            },
            // array of strings that represent form field names
            requiredFields: [],

            // object of error messages to be presented on failed validation
            // @param {String} name - field name
            // @param {String} value - Error message
            errors: {
                'name': 'value'
            },

            // 
            processParameters: function(paramObject) {
                if(!this.parameters) {
                    $.error('no parameters found!');
                    return;
                }
            },

            buildForm: function() {
                this.processParameters();
            }
        });

    });
})(this);