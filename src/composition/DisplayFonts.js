import React from "react";

// Render filtered fonts
const DisplayFonts = ({filteredData, fontSizeValue, customText}) => {

  return (
    <section  className="font-card-main-container">
      {filteredData.map((font) => (
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
      ))}
    </section>
  )
}

// export default DisplayFonts;
export default React.memo(DisplayFonts);