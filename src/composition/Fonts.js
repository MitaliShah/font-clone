import React, {useEffect, useState} from "react"
import CountFonts from "./CountFonts"
import DisplayFonts from "./DisplayFonts"
import LazyLoad from "react-lazyload";

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

  // Load font families from fonts.googleapis.com
  useEffect(() => {
      async function fontFamilies () {
      await fonts.map((font) => {
        const formatName =  font.family.replace(/\s+/g, '+');
        const defaultVariant =  (font.variants.includes('regular')) ? '' : `:${font.variants[0]}`;
        const link =  document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css?family=${formatName}${defaultVariant}&display=swap`;
        return document.head.appendChild(link);
      });
    }    
    fontFamilies();
  }, [fonts]);

  // Filter fonts based on search
  const filteredData  = fonts.filter((font) => font.family.toLowerCase().includes(searchValue.toLowerCase()))

  if (fonts){
    return(
    <React.Fragment>
      <CountFonts filteredData={filteredData} />
      <section  className="font-card-main-container">
        <LazyLoad>
          <DisplayFonts 
            filteredData={filteredData} 
            fontSizeValue={fontSizeValue}
            customText={customText}
          />
        </LazyLoad>
      </section>
    </React.Fragment>
  )
  } else{
    <h1>Loading ...</h1>
  }
  
}

export default Fonts;