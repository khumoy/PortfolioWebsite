import { Provider } from "react-redux";
// import { Redirect, Route, Router, Switch } from "react-router";
import HomePage from "./Components/HomePage/HomePage";
import store from "./redux/store";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>
    </>
  );
}

export default App;
