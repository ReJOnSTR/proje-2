import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Switch>
      <div>
        <Route>
          <Route path="/" />
          <Login />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
