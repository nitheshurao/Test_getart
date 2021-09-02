
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Panel from './MERCHANT PANEL/Panel';
import Pages from './Page/Pages';

import Navbar from './Navbar/Navbar';
import PageDetails from './Page/PageDetails/PageDetails';
function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/Page" component={Pages} />

        <Route exact path="/detail" component={PageDetails} />
      </Switch>

    </Router>
  );
}

export default App;
