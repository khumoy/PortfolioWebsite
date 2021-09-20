import { Provider } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router";
import HomePage from "./Components/HomePage/HomePage";
import store from "./redux/store";


function App() {
  return (
    <>

      <Provider store={store}>
        <HomePage />
      </Provider>

    </>
  );
}

export default App;
