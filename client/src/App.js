
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Panel from './MERCHANT PANEL/Panel';
function App() {
  return (
    <Router >

      <Switch>
        <Route exact path="/Panel" component={Panel} />

      </Switch>

    </Router>
  );
}

export default App;
