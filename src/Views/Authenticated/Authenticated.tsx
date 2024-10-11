import { useEffect, useState } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { Text } from "@fluentui/react-components";
import "./Authenticated.scss";

function Autheticated(): JSX.Element {
  const [token, setToken] = useState<string | null>(null);

  function getToken() {
    microsoftTeams.authentication
      .getAuthToken()
      .then((result: string) => {
        setToken(result);
      })
      .catch((error) => {
        microsoftTeams.app.notifyFailure(error);
      });
  }

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [token]);

  return (
    <div className="authenticated-view">
      <Text weight="bold">Autheticated</Text>
      <Text weight="semibold">You can send this token to the backend.</Text>
      <div className="authenticated-string">{token}</div>
    </div>
  );
}

export default Autheticated;
