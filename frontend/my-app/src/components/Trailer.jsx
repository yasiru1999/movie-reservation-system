import React from "react";
import "../style/Trailer.scss";
import ReactPlayer from 'react-player/youtube'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Trailer() {
    return(
        <div className="trailer">
            <div className="backwards">
                <ArrowBackIcon/>
                Home
            </div>
            <ReactPlayer
                className="video"
                url='https://www.youtube.com/watch?v=Qah9sSIXJqk'
                controls
                width='100%'
                height='100%'
                object-fit='cover'
            />
        </div>
    )
}