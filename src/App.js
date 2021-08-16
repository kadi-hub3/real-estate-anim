import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import Footer from "./components/Footer/Footer";
import home from "./pages/home";
import contact from "./pages/contact";
import homes from "./pages/homes";
import rentals from "./pages/rentals";
import about from "./pages/about";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/homes" component={homes} />
        <Route exact path="/rentals" component={rentals} />
        <Route exact path="/contact" component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
