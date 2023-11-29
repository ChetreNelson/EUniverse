import React from 'react'
import './searchinputform.css'
const SerachInputForm = () => {
  return (
    <div className="search-input-form-container">
     <input type="text" className="search-input"  placeholder="Search Books..."/>
     <button className="search-button">Search</button>
    </div>
  )
}

export default SerachInputForm;
