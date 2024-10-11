import { useState } from "react";
import "./App.css";
import Unauthenticated from "./Views/Unauthenticated/Unauthenticated";
import Autheticated from "./Views/Authenticated/Authenticated";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin(token: string) {
    if (token) {
      setIsAuthenticated(true);
    }
  }
  return (
    <div className="App">
      {isAuthenticated ? (
        <Autheticated />
      ) : (
        <Unauthenticated handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
