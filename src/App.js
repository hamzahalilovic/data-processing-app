import React, { useEffect } from "react";
import { Link, Text } from "@chakra-ui/react";
import Render from "./Render";

function App() {
  useEffect(() => {
    window.location.href =
      "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22C7X3&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800";
  }, []);

  return <div></div>;
}

export default App;
