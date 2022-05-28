import React, {useEffect, useState} from "react";
import '../style/MovieDetail.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import {useParams} from "react-router-dom";
import {CDropdownDivider} from "@coreui/react";

export default function MovieDetail() {

    const [selectedTheater,setSelectedTheater]=useState('');
    const [showtime,setShowtime]=useState('');

    const[input,setInput] = useState(0);

    let [MovieName,setMovieName] = useState("");
    const[TicketPrice,setTicketPrice] = useState("");
    const[TheaterLocation,setTheaterLocation] = useState("");
    const[SeatNumbers,setSeatNumbers] = useState("");
    const[MovieShowTimes,setMovieShowTimes] = useState("");
    const[ResDate,setResDate] = useState("");



    const { id } = useParams();
    const [data, setData] = useState([]);
    const [theater, setTheater] = useState('');

    useEffect(() => {
        function getPackage() {
            axios.get(`http://localhost:8000/movie/Movies/${id}`).then((res) => {
                setData(res.data.post);
                //console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
        function getTheater() {
            axios.get("http://localhost:8002/the/Theaters").then((res) => {
                setTheater(res.data.data.data);
                console.log(res.data);
                console.log(theater);
            }).catch((err) => {
                console.log(err);
            })
        }

        getTheater();
        getPackage();
    }, [])

    function sendData(e) {
        e.preventDefault();
        const newCart = {
            MovieName,
            TicketPrice,
            TheaterLocation,
            SeatNumbers,
            MovieShowTimes,
            ResDate
        }

        axios.post("http://localhost:8004/cart/AddCart", newCart).then(() => {
            console.log(newCart);
            alert("Cart Added");
        }).catch((err) => {
            alert(err);
        });
    }

    const handleSelect=(e)=>{
        console.log(e);
        setSelectedTheater(e)
    }
    const handleSelectShowTime=(e)=>{
        console.log(e);
        setShowtime(e)
    }

    const handleInputChange=(e)=>{
        setInput(e.target.valueAsNumber || e.target.value);
    }

    console.log(MovieName);

    return(
        <div className="moviedetails">
            <div className="details">
                <div className="image">
                    <img src={data.img} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h1>{data.MovieName}</h1>
                    </div>

                    <div className="content1">
                        <p>{data.MovieDescription}</p>
                    </div>
                    <div className="App container">

                        <DropdownButton
                            alignRight
                            title="Select Theater"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Liberty">Liberty</Dropdown.Item>
                            <Dropdown.Item eventKey="Sky Lite">Sky Lite</Dropdown.Item>
                            <Dropdown.Item eventKey="Savoy">Savoy</Dropdown.Item>

                        </DropdownButton>
                        <CDropdownDivider/>
                        <h4 style={{color:"white"}}>You selected {selectedTheater}</h4>
                    </div>

                    <div className="App container">

                        <DropdownButton
                            alignRight
                            title="Select ShowTimw"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelectShowTime}
                        >
                            <Dropdown.Item eventKey="10.30">10.30</Dropdown.Item>
                            <Dropdown.Item eventKey="2.30">2.30</Dropdown.Item>
                            <Dropdown.Item eventKey="6.30">6.30</Dropdown.Item>

                        </DropdownButton>
                        <CDropdownDivider/>
                        <h4 style={{color:"white"}}>You selected {showtime}</h4>
                    </div>

                    <div>
                        <label style={{color:"white"}}>Number of sheets</label>
                        <br/>
                        <input min={0} style={{color:"white"}} type="number" value={input} onChange={handleInputChange} placeholder="sheet count"/>
                        <br/><br/>
                        <label style={{color:"white"}}>Price : {input*500} </label>
                        <br/><br/>
                        <label style={{color:"white"}}>Date</label>
                        <br/>
                        <input min={0} style={{color:"white"}} type="date" placeholder="sheet count"/>
                        <br/><br/>
                    </div>
                    <button className="cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}