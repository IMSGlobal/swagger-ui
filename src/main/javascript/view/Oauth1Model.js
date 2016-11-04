'use strict';

SwaggerUi.Models.Oauth1Model = Backbone.Model.extend({
    defaults: {
        username: '',
        password: '',
        method: 'HMAC-SHA1',
        title: 'oauth1'
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('password') && !!this.get('username') && !!this.get('method');

        this.set('valid', valid);

        return valid;
    }
});