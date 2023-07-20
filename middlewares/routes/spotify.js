const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/token', async (req, res) => {
    const authCode = req.body.code;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = "https://harivmasoor.github.io/Podify/";

    let encodedData = Buffer.from(clientId + ":" + clientSecret).toString('base64');

    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encodedData
            },
            body: new URLSearchParams({
                'grant_type': 'authorization_code',
                'code': authCode,
                'redirect_uri': redirectUri
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to retrieve Spotify token');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to exchange Spotify authorization code" });
    }
});

module.exports = router;
