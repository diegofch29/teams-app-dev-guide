import { useEffect, useState } from "react";
import {
  app as teamsApp,
  authentication as teamsAuthentication,
} from "@microsoft/teams-js";
import { Text } from "@fluentui/react-components";
import "./Authenticated.scss";

function Authenticated(): JSX.Element {
  const [token, setToken] = useState<string | null>(null);

  function getToken() {
    teamsAuthentication
      .getAuthToken()
      .then((result: string) => {
        // You can use this toke to send it to the backend
        setToken(result);
      })
      .catch((error) => {
        teamsApp.notifyFailure(error);
      });
  }

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [token]);

  return (
    <div className="authenticated-view">
      <Text weight="bold">Authenticated</Text>
      <Text weight="semibold">You can send this token to the backend.</Text>
      <div className="authenticated-string">{token}</div>
    </div>
  );
}

export default Authenticated;
