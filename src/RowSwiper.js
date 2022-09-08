//**This is identical to Row.js, but uses swiper js

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
import s from "./RowSwiper.module.css";

import "swiper/css";
// You need this css file for swiper to work
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper styles
import "swiper/css";

import { ModeComment } from "@material-ui/icons";

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
    <div className={s.row}>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        slidesPerGroup={5}
        style={{ width: "100%", height: "100%" }}
        speed={1000}
      >
        {movies.map((movie) => (
          <div className={s.rowImgs}>
            <SwiperSlide>
              <img
                key={movie.id}
                className={`row-img ${isLargeRow && "row-img-large"}`}
                onClick={() => {
                  clickPlay(movie);
                }}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  );
};

export default Row;
//careful of spaces when using template strings
//spent 1.5hr looking for error caused by random space in the src

//got the swiper navigator arrows to work
//still need to find out how to navigate multiple slides at once

//css abit messed up , looks uglier
