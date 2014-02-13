(function() {
    App.module('Views', function (Views, App, Backbone, Marionette, $, _) {

        // For slicing `arguments` in functions
        // (yoinked from Marionette source code)
        var protoSlice = Array.prototype.slice;
        function slice(args) {
            return protoSlice.call(args);
        }


        Views.Form = App.Views.Layout.extend({

            // this is called before initialize.
            constructor: function() {
                this.regions = this.regions || {};

                if(this.formViewContainer) {
                    this.regions = _.extend(this.regions, {
                        formViewContainer: this.formViewContainer
                    });
                }

                // call default Marionette Layout constructor function 
                // now that we're done messing with it
                Marionette.Layout.prototype.constructor.apply(this, slice(arguments));

            },

            tagName: 'form',
            className: 'form',

            // array of strings that represent form field names
            requiredFields: [],

            // object of error messages to be presented on failed validation
            // @param {String} name - field name
            // @param {String} value - Error message
            errors: {
                'name': 'value'
            },

            // 
            buildViewsFromParameters: function() {
                var output = [];
                var formData = this.model.get('data');

                if(!this.parameters) {
                    $.error('no parameters found!');
                    return;
                }

                this.parameters.each(function(model, idx, collection) {
                    var fieldType = model.get('fieldType');
                    var key = model.get('key');
                    var view = App.request('form:component:view', fieldType, {
                        model: model,
                        name: key,
                        value: formData[key]
                    });

                    if(view) {
                        output.push(view);
                    }
                });

                return output;
            },

            buildForm: function() {
                var region = this.formViewContainer;

                this.fieldViews = this.buildViewsFromParameters();

                _.each(this.fieldViews, function(view) {
                    view.render();
                    $(region.el).append(view.el);
                });
            }
        });

    });
})(this);