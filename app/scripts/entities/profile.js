(function() {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        var sampleProfileData = {
            'responseCode': 'RES.20000',
            'responseMessage': 'Success',
            'data': {
                'id': 10,
                'username': 'anthony_colella@haygroup.com',
                'firstName': 'Anthony',
                'lastName': 'Colella',
                'email': 'anthony_colella@haygroup.com',
                'phoneNumber': '2158612330',
                'companyId': 14193,
                'companyName': 'Hay Group',
                'jobId': null,
                'jobTitle': 'Global Director of IT',
                'gradeId': 'B4122451-C5FE-E211-AF61-00505680004A',
                'gradeSetId': '6C96FB07-BD3A-4042-A715-336BF2398DDE',
                'jobGrade': 'MG1',
                'gradeScale': 1,
                'locale': 'en',
                'localeName': 'English',
                'timeZone': 'EST',
                'createDateTime': 1375225900123,
                'pictureUrl': 'https://leap.haygroup.com:7150/v1/users/10/picture?authToken=b24cc8a6-4c5e-4039-99bb-d456be456a8b',
                'lastLoginDateTime': 1391712148062,
                'familyId': 'CM',
                'familyName': 'Category Management',
                'subFamilyId': 'CMA',
                'subFamilyName': 'Category Management',
                'familyTypeId': 'CMA3',
                'familyTypeName': 'Manager of Category Managers'
            }
        };


        // We extend the Model to apply a 'getParameters' method to any model in the app.
        // see _base.js.
        Entities.Profile = Entities.Model.extend({
            url: 'http://my-test-url.com/thingsAPI',

            // could also put this on a base model 
            // see entities/_base.js for info.
            parameters: function() {
                var parameters = App.request('entities:parameters', {
                    urlRoot: this.url
                });

                return parameters;
            },

            fetch: function() {
                this.set(sampleProfileData);
            }
        });



        App.reqres.setHandler('entities:profile', function (params) {
            return new Entities.Profile(params);
        });

    });
})(this);