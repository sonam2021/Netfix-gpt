import React from "react";
import { useSelector } from "react-redux";
import useMovieTailer from "../hooks/useMovieTailer";

const VideoBackground = () => {
  const tailerVideo = useSelector((store)=>store.movies?.tailerVideo)
  useMovieTailer();
  if(!tailerVideo || tailerVideo.length === 0 || !tailerVideo[0]?.id?.videoId) {
    return <p className="text-center text-white">Loading trailer...</p>;
  }
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${tailerVideo[0].id.videoId}?autoplay=1&mute=1`} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
