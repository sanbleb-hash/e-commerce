import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DetailsPage from './screens/DetailsPage';
import CartScreen from './screens/CartScreen';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <main className="min-h-[80vh] font-rubik">
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/products/:id">
              <DetailsPage />
            </Route>
            <Route path="/cart">
              <CartScreen />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </main>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
