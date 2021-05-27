import React from "react"

const CountFonts = ({fontlength}) => {
  return (
    <div>
      <h3><span style={{color: "orange"}}>{fontlength}</span> of {fontlength} font families</h3>
    </div>
  )
}

export default CountFonts