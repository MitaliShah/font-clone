import React, {useState} from "react";
import Fonts from "./Fonts";
import LazyLoad from 'react-lazyload';

function FormData () {
  const initialFormState = {
    searchValue: "",
    customText: "",
    fontSizeValue: "32",
  };

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

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
        
        </form>
        <LazyLoad>
          <Fonts 
          searchValue={formData.searchValue} 
          customText={formData.customText} 
          fontSizeValue={formData.fontSizeValue}
          />
        </LazyLoad>
    </React.Fragment>
  )

}

export default FormData;