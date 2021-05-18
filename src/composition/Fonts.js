import React, { useEffect, useState } from "react"

const Fonts = ({searchValue, customText, fontSizeValue}) => {

  const [fonts, setFonts] = useState([]);

  let sortBy = 'sort=popularity';
  
  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}&${sortBy}`;


  // Load fonts from the google font API
  
  useEffect(() => {
    async function loadFonts() {
      const response = await fetch(URL);
      const fontsFromAPI = await response.json();
      setFonts(fontsFromAPI.items);
    }
    
    loadFonts();
  }, [URL]);

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
        <p style={{fontSize: `${fontSizeValue}px`}} className="customText">{customText ? customText : "Then come the night of the first falling star."}</p>
      </div>
    </div>
  ))

  if (fonts){
    return(
    <React.Fragment>
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