import React from "react";
import './App.css';
import Header from "./composition/Header";
import Footer from "./composition/Footer";
import FormData from "./composition/FormData";
 
function App() {

  return(
    <React.Fragment>
      <main id="main">
        <Header/>
        <FormData />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App;
