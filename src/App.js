import React, { useState } from "react";
import './App.css';
import Fonts from "./composition/Fonts";
import Header from "./composition/Header";
import Footer from "./composition/Footer";

function App() {

  const initialFormState = {
    searchValue: "",
    customText: "",
    fontSizeValue: "24",
  };

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return(
    <React.Fragment>
      <main>
        <Header/>
        <form>
          <label htmlFor="search">
            <input
              id="searchValue"
              type="text"
              name="searchValue"
              onChange={handleChange}
              value={formData.searchValue}
              placeholder="Search"
              alt=""
            />
          </label>
          <label htmlFor="customText">
            <input
              id="customText"
              type="text"
              name="customText"
              onChange={handleChange}
              value={formData.customText}
              placeholder="Custom Text"
              alt=""
            />
          </label>
          <label htmlFor="fontSizeValue">
            <select
              id="fontSizeValue"
              name="fontSizeValue"
              onChange={handleChange}
              value={formData.fontSizeValue}
              alt=""
            >
              <option value="">-- Select Font Size --</option>
              <option value="20">20px</option>
              <option value="24">24px</option>
              <option value="32">32px</option>
              <option value="40">40px</option>
            </select>
          </label>
        </form>
      <Fonts 
        searchValue={formData.searchValue} 
        customText={formData.customText} 
        fontSizeValue={formData.fontSizeValue}
      />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App;
