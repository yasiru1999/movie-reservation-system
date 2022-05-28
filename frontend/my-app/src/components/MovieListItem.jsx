import React, {useState} from 'react';
import "../style/MovieListItem.scss";
import PaymentIcon from '@material-ui/icons/Payment';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export default function MovieListItem({index}) {

    const [Hover,setHover] = useState(false);

    return(
        <div className="MovieListItem"
             style={{left: Hover && index * 283 - 50 + index * 2.5}}
             onMouseEnter={()=>setHover(true)}
             onMouseLeave={()=>setHover(false)}>

            <img
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg"
                alt=""
            />
            <div className="movieButtons">
                <div className="movieButtonIcons">
                    <PaymentIcon className="movieButtonIcon"/>
                    <span>But Tickets</span>
                    <PlayCircleFilledIcon className="movieButtonIcon"/>
                    <span>Watch Trailer</span>
                </div>
                <div className="movieInfo">
                    <span>Movie Name</span>
                </div>
            </div>

        </div>
    )
}