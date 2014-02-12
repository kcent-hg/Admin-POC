/*global Backbone, App */
(function() {

    window.App = new Backbone.Marionette.Application();

    App.vent = new Backbone.Wreqr.EventAggregator();

    App.addRegions({
        mainContent: '#main-content-region'
    });

    App.addInitializer(function(options){
        console.log('started!');
    });

})(this);