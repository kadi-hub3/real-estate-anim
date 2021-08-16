import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import home from "./pages/home";
import contact from "./pages/contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/contact" component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
