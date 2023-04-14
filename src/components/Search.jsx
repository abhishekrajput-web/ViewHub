import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FiSearch} from "react-icons/fi";
const Search = () => {
const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleChange = (e) =>{
e.preventDefault();
if(searchTerm){
  navigate(`/search/${searchTerm}`);
  searchTerm('');
}

}

  return (
    <form action="" className='form' onSubmit={handleChange}>
        <input type="text" placeholder='Search..' className='search-input' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
         <FiSearch color='#222' fontSize="1.5rem" cursor="pointer"/>
    </form>
    )
}

export default Search