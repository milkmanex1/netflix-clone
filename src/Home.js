import React from "react";
import Row from "./Row";
// import Row from "./RowSwiper";
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
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
};

export default Home;
