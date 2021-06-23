import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import HomeScreen from 'pages/Home';
import Header from 'components/Header';
import ToastListener from 'components/ToastListener'
import AppUpdater from 'store/updater'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header/>
          {/* Route List */}
          <Switch>
            <PublicRoute
              path="/"
              exact={true}
              component={HomeScreen}
            />
          </Switch>
          <AppUpdater />
          <ToastListener />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
