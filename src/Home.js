import React from "react";
import Row from "./Row";
import RowSwiper from "./RowSwiper";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Popup from "./Popup";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Popup></Popup>
      <Banner></Banner>
      <RowSwiper
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        slidesPerRow={8}
      ></RowSwiper>
      <RowSwiper
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        slidesPerRow={6}
      ></RowSwiper>
      <RowSwiper
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        slidesPerRow={6}
      ></RowSwiper>
    </div>
  );
};

export default Home;
