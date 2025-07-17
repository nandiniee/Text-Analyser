import "./App.css";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alerts, setAlerts] = useState(null); // State to manage alerts
  const addAlert = (message, type) => {
    setAlerts({
      message: message,
      type: type,
    });
    setTimeout(() => setAlerts(null), 2000); // Clear alert after 2 seconds
  };

  // State to manage light/dark mode
  const [mode, setMode] = useState("light"); // 'light' or 'dark'
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      addAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      addAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Texter"
          about="About Us"
          toggleMode={toggleMode}
          mode={mode}
        />
        {alerts && <Alerts message={alerts.message} type={alerts.type} />}
        <Routes>
          <Route
            path="/"
            element={
              <Forms
                title="Enter the text to be analysed:"
                mode={mode}
                addAlert={addAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
