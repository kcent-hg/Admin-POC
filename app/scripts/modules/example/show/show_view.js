(function() {
    App.module('Example.Show', function (Show, App, Backbone, Marionette, $, _) {

        Show.View = App.Views.Layout.extend({
            template: _.template($('#example-base-view').html())
        });

    });
})(this);