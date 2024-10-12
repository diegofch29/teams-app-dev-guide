import { useState } from "react";
import "./App.css";
import Unauthenticated from "./Views/Unauthenticated/Unauthenticated";
import Authenticated from "./Views/Authenticated/Authenticated";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin(token: string) {
    if (token) {
      //You can use the token here, I am only setting the state to true but you can send this token to the backend.
      setIsAuthenticated(true);
    }
  }
  return (
    <div className="App">
      {isAuthenticated ? (
        <Authenticated />
      ) : (
        <Unauthenticated handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
