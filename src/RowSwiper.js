import React, { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
import "./RowSwiper.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

//**This is identical to Row.js, but uses swiper js

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const clickPlay = (movie) => {
    //if video is already open
    if (trailerUrl) {
      //close the video
      setTrailerUrl("");
    } else {
      //movieTrailer is a library function. You pass in movie name
      movieTrailer(movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
    // console.table(request.data.results);

    setMovies(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <Swiper spaceBetween={20} slidesPerView={5} navigation={true}>
        {movies.map((movie) => (
          <SwiperSlide>
            <img
              key={movie.id}
              onClick={() => {
                clickPlay(movie);
              }}
              className={`row-img ${isLargeRow && "row-img-large"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  );
};

export default Row;
//careful of spaces when using template strings
//spent 1.5hr looking for error caused by random space in the src
