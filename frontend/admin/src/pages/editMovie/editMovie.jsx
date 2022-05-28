import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./editMovie.css";
import axios from "axios";

export default function EditMovie(){
        const { id } = useParams();
        const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/movie/Movies/${id}`).then((res) => {
            setData(res.data.post);
            console.log(data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value});
    }
    function sendData(event) {
        event.preventDefault();
        axios.put(`http://localhost:8000/movie/MoviesUpdate/${id}`, data).then(() => {
            alert("update Successfully");
        }).catch((err) => {
            console.log(err);
        })
        //window.location.href = "";
    }

    return (

        <div className="newMovie">
            <h1 className="addMovieTitle">Update Movie</h1>
            <form onSubmit={sendData} className="addMovieForm">
                <div className="addMovieItem">
                    <label>Movie Name</label>
                    <input
                        type="text"
                        placeholder="Movie Name"
                        defaultValue={data.MovieName}
                        name="MovieName"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        defaultValue={data.MovieDescription}
                        name="MovieDescription"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Casts</label>
                    <input
                        type="text"
                        placeholder="Casts"
                        defaultValue={data.MovieCasts}
                        name="MovieCasts"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Movie Theater</label>
                    <input
                        type="text"
                        placeholder="Theater"
                        defaultValue={data.MovieTheater}
                        name="MovieTheater"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Movie Show Times</label>
                    <input
                        type="text"
                        placeholder="Show Times"
                        defaultValue={data.MovieShowTimes}
                        name="MovieShowTimes"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Cover Image</label>
                    <input
                        type="text"
                        placeholder="image link"
                        defaultValue={data.img}
                        name="img"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Trailer Link</label>
                    <input
                        type="text"
                        placeholder="trailer link"
                        defaultValue={data.trailer}
                        name="trailer"
                        onChange={handleInputChange}
                    />
                </div>
                <button className="addMovieButton">Update</button>
            </form>
        </div>
    );
}

