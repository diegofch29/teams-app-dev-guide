import { Button, Text } from "@fluentui/react-components";
import {
  app as teamsApp,
  authentication as teamsAuthentication,
} from "@microsoft/teams-js";
import "./Unauthenticated.scss";

interface IUnauthenticatedProps {
  readonly handleLogin: Function;
}

function Unauthenticated({ handleLogin }: IUnauthenticatedProps): JSX.Element {
  function handleClickLogin() {
    teamsApp
      .initialize()
      .then(() => {
        getClientToken();
      })
      .catch((error) => {
        teamsApp.notifyFailure(error);
      });
  }

  function getClientToken() {
    teamsAuthentication
      .getAuthToken()
      .then((result) => {
        handleLogin(result);
      })
      .catch((error) => {
        teamsApp.notifyFailure(error);
      });
  }

  return (
    <div className="unauthenticated-view-container">
      <Text size={800} weight="bold">
        Unauthenticated!
      </Text>
      <Text size={500}>You are not authenticated, Please login.</Text>
      <Button
        className="unauthenticated-button"
        onClick={handleClickLogin}
        disabled={teamsApp.isInitialized()}
      >
        Login
      </Button>
    </div>
  );
}

export default Unauthenticated;
