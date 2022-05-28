import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import "./editTheater.css";
import axios from "axios";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

export default function EditMovie(){
    const history = useHistory();
    const location = useLocation();
    const id  = location.state.data._id;
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(location.state.data);
        axios.get(`http://localhost:8002/the/Theater/${id}`).then((res) => {
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
        console.log(data);
        axios.put(`http://localhost:8002/the/TheaterUpdate/${id}`, data).then((res) => {
            alert("update Successfully");
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        //window.location.href = "";
    }

    return (

        <div className="newMovie">
            <h1 className="addMovieTitle">Update Theater</h1>
            <form onSubmit={sendData} className="addMovieForm">
                <div className="addMovieItem">
                    <label>Movie Name</label>
                    <input
                        type="text"
                        placeholder="Movie Name"
                        defaultValue={data.TheaterName}
                        name="TheaterName"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        defaultValue={data.TheaterAdultTicket}
                        name="TheaterAdultTicket"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Casts</label>
                    <input
                        type="text"
                        placeholder="Casts"
                        defaultValue={data.TheaterChildTicket}
                        name="TheaterChildTicket"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="addMovieItem">
                    <label>Movie Theater</label>
                    <input
                        type="text"
                        placeholder="Theater"
                        defaultValue={data.TheaterLocation}
                        name="TheaterLocation"
                        onChange={handleInputChange}
                    />
                </div>
                <button className="addMovieButton">Update</button>
            </form>
        </div>
    );
}

