import { Button, Text } from "@fluentui/react-components";
import * as microsoftTeams from "@microsoft/teams-js";
import "./Unauthenticated.scss";

interface IUnauthenticatedProps {
  readonly handleLogin: Function;
}

function Unauthenticated({ handleLogin }: IUnauthenticatedProps): JSX.Element {
  function handleClickLogin() {
    microsoftTeams.app
      .initialize()
      .then(() => {
        getClientToken();
      })
      .catch((error) => {
        microsoftTeams.app.notifyFailure(error);
      });
  }

  function getClientToken() {
    microsoftTeams.authentication
      .getAuthToken()
      .then((result) => {
        handleLogin(result);
      })
      .catch((error) => {
        microsoftTeams.app.notifyFailure(error);
      });
  }

  return (
    <div className="unathenticated-view-container">
      <Text size={800} weight="bold">
        Unauthenticated!
      </Text>
      <Text size={500}>You are not authenticated, Please login.</Text>
      <Button
        className="unathenticated-button"
        onClick={handleClickLogin}
        disabled={microsoftTeams.app.isInitialized()}
      >
        Login
      </Button>
    </div>
  );
}

export default Unauthenticated;
