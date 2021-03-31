import React, { useState } from "react";
import './App.css';
import Fonts from "./composition/Fonts";
import Header from "./composition/Header";

function App() {

  // const [searchValue, setSearchValue] = useState("")

  // const handleChange = (e) => {
  //   setSearchValue(e.target.value)
  //   console.log(searchValue)
  // }

  const initialFormState = {
    searchValue: "",
    customText: ""
  };

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  console.log(`search`,formData.searchValue)
  console.log(`custom`,formData.customText)
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
        </form>
      </main>
      
      <Fonts searchValue={formData.searchValue} customText={formData.customText}/>
    </React.Fragment>
  )
}

export default App;
