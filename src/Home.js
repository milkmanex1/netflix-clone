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
      ></RowSwiper>
      <RowSwiper
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      ></RowSwiper>
      <RowSwiper
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      ></RowSwiper>
      <RowSwiper
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      ></RowSwiper>
      <RowSwiper
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      ></RowSwiper>
      <RowSwiper
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      ></RowSwiper>
      <RowSwiper
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      ></RowSwiper>
      <RowSwiper
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      ></RowSwiper>
    </div>
  );
};

export default Home;
