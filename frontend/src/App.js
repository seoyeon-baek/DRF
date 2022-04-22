import React from "react";
import {Route} from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <>
      <div className="App">
        <div className="auto-margin">
          <Route exact path="/">
            <Header modal={modal} />
          </Route>

          <Route exact path="/">
            <Nav />
          </Route>

          <Route exact path="/login">
            <LoginModal setModal={setModal} />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
