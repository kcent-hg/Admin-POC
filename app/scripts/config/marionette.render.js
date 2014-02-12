/*global _, Marionette, JST */
(function() {

    _.extend(Marionette.Renderer, {
        lookups: ['templates/'],
        ext: '.hbs',

        render: function(template, data) {
            var path = this.getTemplate(template);
            
            if (!path) {
                throw 'Template ' + template + ' not found!';
            }

            return path(data);
        },

        getTemplate: function(template) {
            var i = 0,
                    lookup,
                    fullName;

            for(i; i < this.lookups.length; i++) {
                lookup = this.lookups[i];
                fullName = lookup + template + this.ext;

                if(JST[fullName]) {
                    return JST[fullName];
                }
            }
        }
    });

}).call(this);