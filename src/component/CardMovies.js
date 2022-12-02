/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export default function CardMovies({ data }) {
  return (
    <>
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <div
              className="movie-img"
              style={{
                backgroundImage: `url("${IMG_PATH}${data.poster_path}")`,
              }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{data.original_title}</h1>
                  <ul className="movie-gen">
                    <li>Lenguaje : {data.original_language} /</li>
                    <li>Fecha de estreno : {data.release_date} /</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>RESUMEN</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li>{data.vote_average}</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">{data.overview}</p>
                </div>
              </div>
              <div className="mr-grid actors-row"></div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    <h3 style={{ textAlign: "center" }}>VER TRAILER</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/acostajaime0607/react-app-movie"
        target="blank"
      >
        <img
          className="dribbble-link"
          style={{ color: "white", backgroundColor: "white" }}
          src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
        />
      </a>
    </>
  );
}
