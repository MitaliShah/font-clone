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
  }, []);

  const filteredData  = fonts.filter((font) => font.family.toLowerCase().includes(searchValue.toLowerCase()))

  const displayFonts = filteredData.map((font) => (<li>{font.family}</li>))

  return(
    <li>{displayFonts}</li>
  )
}

export default Fonts;