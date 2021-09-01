import React, {useState} from "react";
import Fonts from "./Fonts";

function FormData () {
  
  const initialFormState = {
    searchValue: "",
    customText: "",
    fontSizeValue: "32",
  };

  const [formData, setFormData] = useState({...initialFormState})
  const [theme, setTheme] = useState("light");

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleTheme = (e) => {
    e.preventDefault()
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    theme === "light" ? (document.documentElement.className = "light-theme") : (document.documentElement.className = "dark-theme")
  }

  return (
    <React.Fragment>
      <form>
          <label htmlFor="search">
            <input
              id="searchValue"
              type="text"
              name="searchValue"
              onChange={handleChange}
              value={formData.searchValue}
              placeholder="Search by font name"
              alt="Search input"
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
              alt="Custom Text input"
            />
          </label>
          <label htmlFor="fontSizeValue">
            <select
              id="fontSizeValue"
              name="fontSizeValue"
              onChange={handleChange}
              value={formData.fontSizeValue}
              alt="font size"
            >
              <option value="">-- Select Font Size --</option>
              <option value="20">20px</option>
              <option value="24">24px</option>
              <option value="32">32px</option>
              <option value="40">40px</option>
            </select>
          </label>
          <button id="reset" onClick={(e) => {
            e.preventDefault()
            setFormData(initialFormState)
          }}><i className="fas fa-redo"></i></button>
          <button id="theme" onClick={handleTheme}>{theme === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}</button>
        </form>
          <Fonts 
          searchValue={formData.searchValue} 
          customText={formData.customText} 
          fontSizeValue={formData.fontSizeValue}
          />
    </React.Fragment>
  )

}

export default FormData;