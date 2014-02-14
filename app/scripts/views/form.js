(function() {
    App.module('Views', function (Views, App, Backbone, Marionette, $, _) {

        // For slicing `arguments` in functions
        // (yoinked from Marionette source code)
        var protoSlice = Array.prototype.slice;
        function slice(args) {
            return protoSlice.call(args);
        }


        Views.Form = App.Views.Layout.extend({
            tagName: 'form',

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

            renderForm: function(region) {
                var that = this;
                var $region;
                
                // make sure a region is passed before continuing.
                if(!region || !region instanceof Marionette.Region) {
                    return false;
                }

                $region = $(region.el);
                $region.empty();

                this.fieldViews = this.buildViewsFromParameters();

                _.each(this.fieldViews, function(view) {
                    that.bindViewTriggers(view);
                    view.render();
                    $region.append(view.el);
                });
            },

            // Listen for any events emitted by the form component views.
            // provides the event name and the view to process however needed.
            bindViewTriggers: function(view) {
                var that = this;

                _.each(view.triggers, function(item) {
                    that.listenTo(view, item, function() {
                        that.triggerViewEvent(item, view);
                    });
                });
            },

            triggerViewEvent: function(eventName, view) {
                console.log(eventName + ' triggered!', view);
            }
        });

    });
})(this);