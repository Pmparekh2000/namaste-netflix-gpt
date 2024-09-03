import { useEffect, useState } from "react";
import { API_OPTIONS, GET_VIDEOS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieVideo = (movie_id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const output = await fetch(GET_VIDEOS + movie_id + "/videos", API_OPTIONS);
    const movie_videos = await output.json();
    const filterData = movie_videos.results.filter(
      (movie_video) =>
        movie_video.type === "Trailer" && movie_video.name === "Final Trailer"
    );
    const trailer =
      filterData.length === 0 ? movie_videos.results[0] : filterData[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieVideo;
