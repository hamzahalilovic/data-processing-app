const FitbitApiClient = require("fitbit-node");
const { access } = require("fs");

const REDIRECT_URL = "http://localhost:3000";

const client = new FitbitApiClient({
  clientId: "22C7X3",
  clientSecret: "9207b71383e00251b74d5dabb5ead0e5",
});

const refreshAccessToken = async (accessToken, refreshToken) => {
  const data = await client.refreshAccessToken(accessToken, refreshToken);
  return data.access_token;
};

const main = async () => {
  const authorizeUrl = await client.getAuthorizeUrl(
    "activity",
    // Frontend URL
    REDIRECT_URL
  );

  console.log(authorizeUrl);

  // Temporarily hardcoded value
  // let code = "6973dff04cba8bd6603f2c2090889f64fca60305";
  // const {
  //   access_token: accessToken,
  //   refresh_token: refreshToken,
  //   user_id: userId,
  // } = await client.getAccessToken(code, REDIRECT_URL);

  // let accessToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM3WDMiLCJzdWIiOiI1WE1DWjYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNjEyNTYzMjE4LCJpYXQiOjE2MTI1MzQ0MTh9.LPZQGn9gQtVzPz1SknRbF49-bFlw1QGOvwmlWXKOG3s";
  // const refreshToken =
  //   "a8814c410acb738a8a7858219d2ec57c716243f41ef616bf511f3e14fb5d1128";
  // const userId = "5XMCZ6";

  let code = "e318741adbdb78ed36716bb576466d0fb6d5fef8";
  let redirectUrl =
    "http://localhost:3000/?code=e318741adbdb78ed36716bb576466d0fb6d5fef8#_=_";
  //  getAccessToken(code, redirectUrl);

  console.log(getAccessToken());

  // accessToken = await refreshAccessToken(accessToken, refreshToken);

  //   const response = await client.get(
  //     "/activities/date/2020-07-26.json",
  //     accessToken,
  //     [userId]
  //   );
  //   console.log(response[0].errors);
};

main();
