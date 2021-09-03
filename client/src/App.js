
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Panel from './MERCHANT PANEL/Panel';
import Pages from './Page/Pages';

import Navbar from './Navbar/Navbar';
import PageDetails from './Page/PageDetails/PageDetails';
import { useState } from 'react';
import Cart from './Navbar/Cart';
import Carts from './Page/PageDetails/Carts';
function App() {
  const [sidecart, setSidecart] = useState(false);

  return (
    <Router >

      <Navbar setSidecart={setSidecart}
        sidecart={sidecart}
      />
      <Switch>
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/Page" component={Pages} />

        <Route
          path="/d"
          exact
          render={(props) => (
            <PageDetails {...props}
              sidecart={sidecart} />
          )}
        />

        <Route
          path="/c"
          exact
          render={(props) => (
            <Cart {...props}
              sidecart={sidecart} />
          )}
        />

      </Switch>
      {/* <Cart/> */}
    </Router>
  );
}

export default App;
