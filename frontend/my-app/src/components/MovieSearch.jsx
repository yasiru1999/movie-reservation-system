import React, {useEffect, useState} from "react";
import '../style/MovieSearch.scss'
import axios from "axios";

const Search = () => {

    const [data, setData] = useState([]);

    const[filter,setFilter] = useState('');

    useEffect(() => {
        function getPackage() {
            axios.get("http://localhost:8000/movie/Movies").then((res) => {
                console.log(res);
                setData(res.data.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackage();
    }, []);

    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return(
        <section class="container">
            <div>
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto">
                        <label><h4>Search Movie</h4></label>
                        <input type="text" className="form-control" value={filter} onChange={searchText.bind(this)}/>

                    </div>

                </div>
                {dataSearch.map((item, index)=>{
                    return(

                        <div class="grid1">
                            <div class="grid2">
                                <div class="card">
                                    <a className="Btn" href={`/movieDetail/${item._id}`}>
                                        <img src={item.img} style={{width: '100%', height: '80%'}}/>
                                        <div className="container">
                                            <br/>
                                            <h5 className="cardTitle">{item.MovieName}</h5>
                                            <p className="card-text">{item.MovieDescription}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </section>
    )
}

export default Search