import React from 'react';
import categories from "../utils/constants";
const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  // const selectedCategory = "New";
  return (
    <aside className='sidebar'>
      {categories.map((category) => (
        <div className='btn-container' key={category.name} style={{background: category.name === selectedCategory && "#FC1503",color: "white"}} onClick={() => setSelectedCategory(category.name)}>
          <span style={{color: category.name === selectedCategory ? "white" : "red", fontSize:"1rem"}}>{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? "1" : "0.8", fontSize:"1rem"}}>{category.name}</span>
        </div>
      ))}
    </aside>
  )
}

export default Sidebar