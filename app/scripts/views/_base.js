(function() {
    App.module('Views', function (Views, App, Backbone, Marionette, $, _) {

        // Scaffolding for extending views.
        Views.ItemView = Marionette.ItemView.extend({});
        Views.Layout = Marionette.Layout.extend({});
        Views.CollectionView = Marionette.CollectionView.extend({});
        Views.CompositeView = Marionette.CompositeView.extend({});

    });
})(this);