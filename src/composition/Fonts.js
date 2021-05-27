import React, { useEffect, useState } from "react"
import CountFonts from "./CountFonts"

const Fonts = ({searchValue, customText, fontSizeValue}) => {

  const [fonts, setFonts] = useState([]);
  let sortBy = 'sort=popularity';

  let fontlength = Object.keys(fonts).length

  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}&${sortBy}`;

  // Load fonts from the google font API
  
  useEffect(() => {
    async function loadFonts() {
      const response = await fetch(URL);
      const fontsFromAPI = await response.json();
      setFonts(fontsFromAPI.items);
    }
    // Import fonts into index.html
    fonts.forEach((font) => {
      const formattedName = font.family.replace(/\s+/g, '+');
      const defaultVariant = (font.variants.includes('regular')) ? '' : `:${font.variants[0]}`;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css?family=${formattedName}${defaultVariant}&display=swap`;
      document.head.appendChild(link);
    });

    loadFonts();
  }, [URL,fonts]);

  // Filter fonts based on search
  const filteredData  = fonts.filter((font) => font.family.toLowerCase().includes(searchValue.toLowerCase()))

  // Render filtered fonts
  const displayFonts = filteredData.map((font) => (

    <div key={font.family} className="font-card">
      <div className="font-card-info">
        <h1 className="font-title">{font.family}</h1>
        <button className="plus-icon" aria-label="My button">
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <div className="designer-name">
        <p>Christian Robertson</p>
      </div>

      <div className="font-preview">
        <p style={{fontSize: `${fontSizeValue}px`, fontFamily: `${font.family}, sans-serif`}} className="customText">{customText ? customText : "Then come the night of the first falling star."}</p>
      </div>
    </div>
  ))

  if (fonts){
    return(
    <React.Fragment>
      <CountFonts fontlength={fontlength}  />
      <section  className="font-card-main-container">      
        {Object.values(displayFonts)}
      </section>      
    </React.Fragment>
  )
  } else{
    <h1>Loading ...</h1>
  }
  
}

export default Fonts;