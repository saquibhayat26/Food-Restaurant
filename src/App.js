import "./App.css";
import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Items from "./Components/Items/Items";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import CheckoutSuccess from "./Pages/CheckoutSuccess/CheckoutSuccess";
import { useState } from "react";

function App() {
  const [signup, setSignup] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={signup ? <Signup /> : <Home />} />
          <Route
            exact
            path="/product"
            element={
              <>
                <Navbar />
                <Items />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={<Login signup={signup} setSignup={setSignup} />}
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/success"
            element={
              <>
                <Navbar />
                <CheckoutSuccess />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
