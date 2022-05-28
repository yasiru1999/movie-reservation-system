import "./movieList.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getPackage() {
      axios.get("http://localhost:8280/movie/getAllMovies").then((res) => {
        console.log(res);
        setData(res.data.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getPackage();
  }, []);

  function deleteMovie(id) {
    axios.delete(`http://localhost:8000/movie/MoviesDelete/${id}`)
        .then(() => {
          alert("Deleted Successfully");
        }).catch((err) => {
      alert("error : " + err);
    });
    window.location.reload();
  }

  return (
    <div className="MovieList">
      <table id="movie">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Description</th>
            <th>Casts</th>
            <th>Theater</th>
            <th>Show Times</th>
            <th>Image Link</th>
            <th>Trailer Link</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map(data => (
                <tr>
                  <td>{data._id}</td>
                  <td>{data.MovieName}</td>
                  <td>{data.MovieDescription}</td>
                  <td>{data.MovieCasts}</td>
                  <td>{data.MovieTheater}</td>
                  <td>{data.MovieShowTimes[0]},{data.MovieShowTimes[1]},{data.MovieShowTimes[2]}</td>
                  <td>{data.img}</td>
                  <td>{data.trailer}</td>
                  <td className="text-center">
                    <a className="Btn" href={`/editmovie/${data._id}`}>Edit</a></td>
                  <td className="text-center">
                  <input
                      type="button"
                      name="delete"
                      value="Delete"
                      onClick={() => deleteMovie(data._id)}
                      className="Btn"/></td>

                </tr>
            ))
          }


        </tbody>

      </table>
    </div>
  );
}
