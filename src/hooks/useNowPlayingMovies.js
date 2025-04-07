import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    const dispach = useDispatch();
  const API_URL = "https://www.omdbapi.com/?s=Avengers&apikey=f12865b3";
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    dispach(addNowPlayingMovies(json.Search));
  }

  useEffect(()=>{
    getNowPlayingMovies();

  },[]);
}

export default useNowPlayingMovies;