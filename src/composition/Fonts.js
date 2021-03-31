import React, { useEffect, useState } from "react"

const Fonts = ({searchValue}) => {

  const [fonts, setFonts] = useState([]);

  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function loadFonts() {
      const response = await fetch(URL);
      const fontsFromAPI = await response.json();
      setFonts(fontsFromAPI.items);
    }
    
    loadFonts();
  }, [URL]);

  const filteredData  = fonts.filter((font) => font.family.toLowerCase().includes(searchValue.toLowerCase()))

  const displayFonts = filteredData.map((font) => (<div key={font.family}><h3>{font.family}</h3></div>))

  return(
    <li>{displayFonts}</li>
  )
}

export default Fonts;