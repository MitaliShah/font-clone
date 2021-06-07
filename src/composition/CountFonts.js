import React from "react"

const CountFonts = ({filteredData}) => {

  let fontlength = Object.keys(filteredData).length

  return (
    <div id="countFonts">
      <p><span style={{color: "#866B65"}}>{fontlength}</span> of {fontlength} font families</p>
    </div>
  )
}

export default CountFonts