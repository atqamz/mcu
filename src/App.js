import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Component
import Navbar from "./components/Navbar.com";
import Footer from "./components/Footer.com";

// Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <BrowserRouter>
        <Route exact path='/'>
          <Home search={searchTerm} />
        </Route>
        <Route path='/movie/:id'>
          <Detail />
        </Route>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
