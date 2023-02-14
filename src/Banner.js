import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://bilisimgundem.com/wp-content/uploads/2020/02/netflix-banner-1.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">This is test description </h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
}

export default Banner;
