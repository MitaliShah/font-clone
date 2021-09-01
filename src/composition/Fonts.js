import React, {useEffect, useState} from "react"
import CountFonts from "./CountFonts"
import DisplayFonts from "./DisplayFonts"

const Fonts = ({searchValue, customText, fontSizeValue}) => {

  const [fonts, setFonts] = useState([]);
  let sortBy = 'sort=popularity';

  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}&${sortBy}`;

  // Load fonts from the google font API
  useEffect(() => {

    const abortController = new AbortController();

    async function loadFonts() {
      try {
        const response = await fetch(URL, {signal: abortController.signal });
        const fontsFromAPI = await response.json();
        setFonts(fontsFromAPI.items);
      } catch (error) {
        if(error.name === "AbortError"){
          // Ignore `AbortError`
          console.log("Aborted", URL);
        }else {
          throw error;
        }
      }
    }

    loadFonts();

    return () => abortController.abort();
  }, [URL]);

  // Load font families from fonts.googleapis.com
  useEffect(() => {

    const abortController = new AbortController();

      async function fontFamilies () {
        try {
          await fonts.map(({family, variants}) => {
            const formatName =  family.replace(/\s+/g, '+');
            const defaultVariant =  (variants.includes('regular')) ? '' : `:${variants[0]}`;
            const link =  document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css?family=${formatName}${defaultVariant}&display=swap crossorigin`;
            return document.head.appendChild(link);
          });
        } catch (error) {
          if(error.name === "AbortError"){
            console.log("Aborted", fonts);
          }else {
            throw error;
          }
        }
      }
    fontFamilies();

    return () => abortController.abort();
  }, [fonts]);

  // Filter fonts based on search
  const filteredData  = fonts.filter((font) => font.family.toLowerCase().includes(searchValue.toLowerCase()))

  if (fonts){
    return(
    <React.Fragment>
      <CountFonts filteredData={filteredData} />
      <section  className="font-card-main-container">
          <DisplayFonts 
            filteredData={filteredData} 
            fontSizeValue={fontSizeValue}
            customText={customText}
          />
      </section>
    </React.Fragment>
  )
  } else{
    <h1>Loading ...</h1>
  }
  
}

export default Fonts;