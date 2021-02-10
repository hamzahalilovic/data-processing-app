// initialize the express application
const express = require("express");
const app = express();

// initialize the Fitbit API client
const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
  clientId: "22C7X3",
  clientSecret: "9207b71383e00251b74d5dabb5ead0e5",
  apiVersion: "1.2", // 1.2 is the default
});

// redirect the user to the Fitbit authorization page
app.get("/authorize", (req, res) => {
  // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
  res.redirect(
    client.getAuthorizeUrl(
      "activity heartrate location nutrition profile settings sleep social weight",
      "YOUR_CALLBACK_URL"
    )
  );
});

// handle the callback from the Fitbit authorization flow
app.get("/callback", (req, res) => {
  // exchange the authorization code we just received for an access token
  client
    .getAccessToken(req.query.code, "YOUR_CALLBACK_URL")
    .then((result) => {
      // use the access token to fetch the user's profile information
      client
        .get("/profile.json", result.access_token)
        .then((results) => {
          res.send(results[0]);
        })
        .catch((err) => {
          res.status(err.status).send(err);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err);
    });
});

// launch the server
app.listen(3000);
