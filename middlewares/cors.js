const cors = require('cors');

const corsOptions = {
    origin: ['https://harivmasoor.github.io/Podify/', 'https://podify-backend.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

module.exports = cors(corsOptions);
