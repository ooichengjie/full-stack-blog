import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <div className="App">
        <Router>
          <Topbar/>
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/register">
            {user ? <Homepage /> : <Register/>}
            </Route>
            <Route path="/login">
            {user ? <Homepage /> : <Login/>}
            </Route>
            <Route path="/write">
            {user ? <Write /> : <Register/>}
            </Route>
            <Route path="/settings">
            {user ? <Settings /> : <Register/>}
            </Route>
            <Route path="/post/:postId">
              <Single/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
