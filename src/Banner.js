import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const randomInt = randomIntFromInterval(0, 19);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);

    // console.log(`The length of the results is ${request.data.results.length}`);
    setMovie(request.data.results[randomInt]);
    return request;
  }
  //   console.log(`The number chosen is ${randomInt}`);
  //   console.log(movie);
  //   console.log(movie.backdrop_path);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner-fadetop"></div>
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <h1 className="banner-desc">{movie.overview}</h1>
        <div className="banner-bts">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">More info</button>
        </div>
      </div>
      <div className="banner-fadebottom"></div>
    </header>
  );
};

export default Banner;
