import React, { useState } from "react";
import "./newMovie.css";
import axios from "axios";

export default function NewMovie() {
  const [MovieName, setMovieName] = useState("");
  const [MovieDescription, setMovieDescription] = useState("");
  const [MovieCasts, setMovieCasts] = useState("");
  const [MovieTheater, setMovieTheater] = useState("");
  const [MovieShowTimes, setMovieShowTimes] = useState("");
  const [img, setImg] = useState("");
  const [trailer, setTrailer] = useState("");

  function sendData(e) {
    e.preventDefault();
    const showtime = MovieShowTimes.split(',');
    const newMovie = {
      MovieName,
      MovieDescription,
      MovieCasts,
      MovieTheater,
      MovieShowTimes:showtime,
      img,
      trailer
    }

    axios.post("http://localhost:8000/movie/AddMovies", newMovie).then(() => {
      console.log(newMovie);
      alert("Package Added");
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form onSubmit={sendData} className="addMovieForm">
        <div className="addMovieItem">
          <label>Movie Name</label>
          <input type="text" placeholder="Movie Name" onChange={(e) => {

            setMovieName(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input type="text" placeholder="Description" onChange={(e) => {

            setMovieDescription(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Casts</label>
          <input type="text" placeholder="Casts" onChange={(e) => {

            setMovieCasts(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Movie Theater</label>
          <input type="text" placeholder="Theater" onChange={(e) => {

            setMovieTheater(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Movie Show Times</label>
          <input type="text" placeholder="Show Times" onChange={(e) => {

            setMovieShowTimes(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Cover Image</label>
          <input type="text" placeholder="image link" onChange={(e) => {

            setImg(e.target.value);

          }}/>
        </div>
        <div className="addMovieItem">
          <label>Trailer Link</label>
          <input type="text" placeholder="trailer link" onChange={(e) => {

            setTrailer(e.target.value);

          }}/>
        </div>
        <button className="addMovieButton">Add</button>
      </form>
    </div>
  );
}
