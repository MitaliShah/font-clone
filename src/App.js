import React, { useState } from "react";
import './App.css';
import Fonts from "./composition/Fonts";
import Header from "./composition/Header";

function App() {

  const initialFormState = {
    searchValue: "",
    customText: "",
    fontSizeValue: "24",
    mode: "light"
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
            />
          </label>
          <label htmlFor="fontSizeValue">
            <select
              id="fontSizeValue"
              name="fontSizeValue"
              onChange={handleChange}
              value={formData.fontSizeValue}
            >
              <option value="">-- Select Font Size --</option>
              <option value="20">20px</option>
              <option value="24">24px</option>
              <option value="32">32px</option>
              <option value="40">40px</option>
            </select>
          </label>
          <fieldset>
          <legend></legend>
          <label htmlFor="dark">
            
            <input
              id="dark"
              type="radio"
              name="mode"
              onChange={handleChange}
              value="dark"
              checked={formData.mode === "dark"}
            />
          </label>
          <label htmlFor="light">
            
            <input
              id="light"
              type="radio"
              name="mode"
              onChange={handleChange}
              value="light"
              checked={formData.mode === "light"}
            />
          </label>
        </fieldset>
        </form>
      
      
      <Fonts 
        searchValue={formData.searchValue} 
        customText={formData.customText} 
        fontSizeValue={formData.fontSizeValue}
        mode={formData.mode}
      />
      </main>
    </React.Fragment>
  )
}

export default App;
