import { useDispatch } from "react-redux";
import { addTailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTailer = () => {
    const dispach = useDispatch();
    const API_KEY = "AIzaSyBk0byEV1-yn2FiKQW4z8m9s1GLaj92r6o";
    const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=The+Avengers+2012+trailer&key=${API_KEY}`;
  
    const getMoviesVideos = async () => {
      const data = await fetch(YOUTUBE_URL);
      const json = await data.json();
  
      const filterData = json.items.filter(
        (video) => video.snippet.title === "The Avengers 2012 Trailer"
      );
      // setTailerId(filterData?.[0]?.id?.videoId)
      dispach(addTailerVideo(filterData))
    };
    useEffect(() => {
      getMoviesVideos();
    }, []);
}
export default useMovieTailer;