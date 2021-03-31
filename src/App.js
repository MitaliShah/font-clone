import React, { useEffect, useState } from "react";
import './App.css';
import Fonts from "./composition/Fonts";

function App() {

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue)
  }

  return(
    <React.Fragment>      
      <form>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            name="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="Search"
          />
        </label>
      </form>
      <Fonts searchValue={searchValue} />
    </React.Fragment>
  )
}

export default App;
