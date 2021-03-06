exports.register = function(server, options, next) {
    var endpoint = options.endpoint || '/ping';
    var response = options.response || 'Success';

    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            reply((typeof(response) === 'function') ? response() : response);
        },
        config: {
            description: 'Simple endpoint to determine service availability. Returns 200 if successful. No required parameters, simply "ping it"',
            tags: ['ping']
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
