
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Panel from './MERCHANT PANEL/Panel';
// import Pages from './Page/Pages';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar/Navbar';
import PageDetails from './Page/PageDetails/PageDetails';
import { useEffect, useState } from 'react';
import Cart from './Navbar/Cart';
// import Carts from './Page/PageDetails/Carts';


// import Page from './Page/Pagee/Page';

import Pages from './Page/Pages';
import Page from './Page/Pagee/Page';
import Home from './Page/Home';
function App() {
  const [sidecart, setSidecart] = useState(false);
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // useEffect(async () => {
  //   await dispatch(getPosts());
  // }, [currentId, dispatch]);


  return (
    <Router >

      <Navbar setSidecart={setSidecart}
        sidecart={sidecart}
      />
      {/* <Pages /> */}
      <Switch>
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/Pages"

          component={Home}

        // render={(props) => (
        //   <Pages {...props}
        //     setCurrentId={setCurrentId} />
        // )}

        />
        <Route exact path="/page" component={Page} />

        <Route
          path="/product/"
          // /product/${_id}
          // component={PageDetails}
          render={(props) => (
            <PageDetails {...props}
              sidecart={sidecart} />
          )}
        />


        {/* <Route
          path="/d"
          exact
          render={(props) => (
            <PageDetails {...props}
              sidecart={sidecart} />
          )}
        /> */}


        {/* <Route path="/contact/:id" component={ContactDetail} /> */}
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
