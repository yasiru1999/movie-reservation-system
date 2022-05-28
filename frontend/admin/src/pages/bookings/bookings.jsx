import "./bookings.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MovieList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        function getPackage() {
            axios.get("http://localhost:8003/res/Reservations").then((res) => {
                console.log(res);
                setData(res.data.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackage();
    }, []);

    return (
        <div className="MovieList">
            <table id="movie">
                <thead>
                <tr>
                    <th>Customer name</th>
                    <th>email</th>
                    <th>number</th>
                    <th>Movie Name</th>
                    <th>Ticket Price</th>
                    <th>Theater Name</th>
                    <th>Seat Numbers</th>
                    <th>Showtime</th>
                    <th>Date</th>

                </tr>
                </thead>
                <tbody>
                {
                    data.map(data => (
                        <tr>
                            <td>{data.CustomerName}</td>
                            <td>{data.Email}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.MovieName}</td>
                            <td>{data.TicketPrice}</td>
                            <td>{data.TheaterName}</td>
                            <td>{data.SeatNumbers}</td>
                            <td>{data.Showtime}</td>
                            <td>{data.Date}</td>
                        </tr>
                    ))
                }


                </tbody>

            </table>
        </div>
    );
}
