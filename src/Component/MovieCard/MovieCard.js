import React from "react";
import "./MovieCard.css";
import Rate from "../Rate/Rate";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <div className="cardMovie">
      <div className="card_left">
        <img src={movie.image} alt="MoviePoster" />
      </div>
      <div className="card_right">
        <h1>{movie.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={movie.rating} />
        </div>
        <div className="card_right__review">
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
MovieCard.propTypes = { movies: PropTypes.object };
