const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const client_id = "151951ea4c86411c90d5c0e8fd547864";
const redirect_uri = "http://localhost:3000/callback";
const client_secret = "d20294a374d740e2b26ce89eae41ccaf";
const scope = ["streaming", "user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state"];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/callback", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: redirect_uri,
    clientId: client_id,
    clientSecret: client_secret,
  });

  // Retrieve an access token and a refresh token
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log("Something went wrong!", err);
    });
});

app.listen(3001);
