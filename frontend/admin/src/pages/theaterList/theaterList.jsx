import "./theaterList.css";
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function TheaterList() {

    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        function getPackage() {
            axios.get("http://localhost:8002/the/Theaters").then((res) => {
                console.log(res);
                setData(res.data.data);
                console.log(data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackage();
    }, []);

    function deleteMovie(id) {
        axios.delete(`http://localhost:8002/the/TheaterDelete/${id}`)
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
                    <th>Theater Name</th>
                    <th>Adult Price</th>
                    <th>Child Price</th>
                    <th>Location</th>
                    <th>Sheet Count</th>
                    <th>Show Times</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(data => (
                        <tr>
                            <td>{data.TheaterName}</td>
                            <td>{data.TheaterAdultTicket}</td>
                            <td>{data.TheaterChildTicket}</td>
                            <td>{data.TheaterLocation}</td>
                            <td>{data.SheetCount}</td>
                            <td>{data.MovieShowTimes}</td>
                            <td className="text-center">
                                <a className="Btn" onClick={() => {
                                    history.push({
                                        pathname: '/editTheater',
                                        state: { data: data }
                                    })
                                }}>Edit</a></td>
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
