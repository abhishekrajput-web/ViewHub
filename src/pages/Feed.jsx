import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';
import {Sidebar,Videos} from '../components';

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
  },[selectedCategory])

  return (
    <main className='feed-container'>
      <div>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      <div style={{marginTop:"3.5rem"}}>
        <h2 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}><span style={{color:"#fff"}}>{selectedCategory}</span>  Videos</h2>
      <Videos videos={videos}/>
      </div>
    </main>
  )
}

export default Feed