import React, { useState } from "react";
import "./newTheater.css";
import axios from "axios";

export default function NewTheater() {
    const [TheaterName, setTheaterName] = useState("");
    const [TheaterAdultTicket, setTheaterAdultTicket] = useState("");
    const [TheaterChildTicket, setTheaterChildTicket] = useState("");
    const [TheaterLocation, setTheaterLocation] = useState("");
    const [SheetCount, setSheetCount] = useState("");
    const [MovieShowTimes, setMovieShowTimes] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newTheater = {
            TheaterName,
            TheaterAdultTicket,
            TheaterChildTicket,
            TheaterLocation,
            SheetCount,
            MovieShowTimes
        }

        axios.post("http://localhost:8002/the/AddTheater", newTheater).then(() => {
            console.log(newTheater);
            alert("Theater Added");
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div className="newMovie">
            <h1 className="addMovieTitle">Add New Theater</h1>
            <form onSubmit={sendData} className="addMovieForm">
                <div className="addMovieItem">
                    <label>Theater Name</label>
                    <input type="text" placeholder="Theater Name" onChange={(e) => {

                        setTheaterName(e.target.value);

                    }}/>
                </div>
                <div className="addMovieItem">
                    <label>Adult Price</label>
                    <input type="text" placeholder="Adult Price" onChange={(e) => {

                        setTheaterAdultTicket(e.target.value);

                    }}/>
                </div>
                <div className="addMovieItem">
                    <label>Child Price</label>
                    <input type="text" placeholder="Child Price" onChange={(e) => {

                        setTheaterChildTicket(e.target.value);

                    }}/>
                </div>
                <div className="addMovieItem">
                    <label>Location</label>
                    <input type="text" placeholder="Location" onChange={(e) => {

                        setTheaterLocation(e.target.value);

                    }}/>
                </div>
                <div className="addMovieItem">
                    <label>Sheet Count</label>
                    <input type="text" placeholder="Sheet Count" onChange={(e) => {

                        setSheetCount(e.target.value);

                    }}/>
                </div>
                <div className="addMovieItem">
                    <label>Show Times</label>
                    <input type="text" placeholder="Show Times" onChange={(e) => {

                        setMovieShowTimes(e.target.value);

                    }}/>
                </div>
                <button className="addMovieButton">Add</button>
            </form>
        </div>
    );
}
