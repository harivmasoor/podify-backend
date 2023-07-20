const cors = require('cors');

const corsOptions = {
    origin: '*',  // Consider specifying the exact domains in a production environment
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

module.exports = cors(corsOptions);

