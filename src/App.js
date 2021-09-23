import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Courses from "./Components/Courses";
// import Layout from "./Container/Layout";
import DynamicPage from "./DynamicPage";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to='/home' />
            </Route>
            <Route path="/:pages" exact>
              <DynamicPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
