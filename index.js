const express = require('express');
const dotenv = require('dotenv').config();
const corsSetup = require('./middlewares/cors');
const spotifyRoutes = require('./routes/spotify');

const app = express();
app.use(express.json());
app.use(corsSetup);

const PORT = process.env.PORT || 3000;

app.use('/spotify', spotifyRoutes);

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


