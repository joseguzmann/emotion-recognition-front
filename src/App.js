import React, { useState, useRef } from "react";
import LoadingScreen from "react-loading-screen";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Sidebar from "./components/sidebar/Sidebar";
import LoadingContext from "./context/loading.context";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <LoadingScreen
        loading={loading}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        text="Analizando audio..."
      >
        <Router>
          <div className="App">
            <div className="side">
              <nav className="navbar side navbar-expand-lg navbar-light p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  style={{ zIndex: "1" }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Sidebar />
                </div>
              </nav>
            </div>
            <div className="main">
              <About />
            </div>
          </div>
        </Router>
      </LoadingScreen>
    </LoadingContext.Provider>
  );
};

export default App;
