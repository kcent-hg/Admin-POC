(function() {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        var sampleParamData = [
            {
                key: 'id',
                label: null,
                type: 'int',
                systemGenerated: true,
                hidden: true,
                regex: null,
                fieldType: null,
                source: null,
                required: true,
                dependencies: []
            },
            {
                key: 'email',
                label: 'Email',
                type: 'string',
                systemGenerated: false,
                hidden: true,
                regex: '^\+?[a-z0-9](([-+.]|[_]+)?[a-z0-9]+)*@([a-z0-9]+(\.|\-))+[a-z]{2,6}$',
                fieldType: 'text',
                source: null,
                required: true,
                dependencies: []
            },
            {
                key: 'gradeSetId',
                label: 'Grades Structure',
                type: 'string',
                systemGenerated: false,
                hidden: false,
                regex: null,
                fieldType: 'dropdown',
                source: '/endpoint?sourceType=GRADESET&clientId={{clientId}}',
                required: true,
                dependencies: ['clientId']
            }
        ];

        Entities.Parameter = Backbone.Model.extend();

        // in the wild, this call "SHOULD" be something 
        // we can base off the calling model's url.
        // for example: this.urlRoot + '/parameters'
        Entities.Parameters = Backbone.Collection.extend({

            initialize: function(options) {

                // example of how to force a url config when initialized.
                if(!options && !options.urlRoot) {
                    $.error('No urlRoot defined!');
                    return;
                } else {
                    this.url = options.urlRoot + '/parameters';
                }
            
            },

            // fake datas!
            fetch: function() {
                this.add(sampleParamData);
                console.log('fake datas fetched!');
            }

        });

        App.reqres.setHandler('entities:parameters', function(options) {
            return new Entities.Parameters(options);
        });


    });
})(this);