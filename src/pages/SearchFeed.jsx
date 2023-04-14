import React,{useState,useEffect} from 'react';
import {Videos} from "../components";
import { fetchData } from '../utils/api';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  },[searchTerm]);

  return (
    <section style={{marginTop:"1.5rem"}}>
      <h2  style={{color:"white",fontSize:"2rem",fontWeight:"bold",marginBottom:"2rem",paddingLeft:"1rem"}}>Search Results For <span style={{color:"red",textTransform:"capitalize"}}>{searchTerm}</span> Videos</h2>
      <Videos videos={videos}/>
    </section>
  )
}

export default SearchFeed