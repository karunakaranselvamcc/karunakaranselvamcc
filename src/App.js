import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./redux/store";
import Routes from "./Routes";
import Toast from "./utils/Toaster";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="d-flex flex-column h-100">
          <Toast />
          <Header />
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
