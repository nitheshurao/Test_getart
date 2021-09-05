
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Panel from './MERCHANT PANEL/Panel';
import Pages from './Page/Pages';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar/Navbar';
import PageDetails from './Page/PageDetails/PageDetails';
import { useEffect, useState } from 'react';
import Cart from './Navbar/Cart';
import Carts from './Page/PageDetails/Carts';

import { getPosts } from './redux/actions/Product';
import Page from './Page/Pagee/Page';
import APa from './Page/Pagee/APa';
function App() {
  const [sidecart, setSidecart] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Router >
      <APa />
      <Navbar setSidecart={setSidecart}
        sidecart={sidecart}
      />

      <Switch>
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/Page"

        // component={Pages}

        // render={(props) => (
        //   <Pages {...props}
        //     setCurrentId={setCurrentId} />
        // )}

        />

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
