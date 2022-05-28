import React, {useRef, useState} from "react";
import '../style/MovieList.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MovieListItem from "./MovieListItem";

export default function MovieList() {
    const [slideNumber,setSlideNumber] = useState(0);
    const [isMoved,setIsMoved] = useState(false);

    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 150
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${430 + distance}px)`
        }
        console.log(distance);
        if(direction === "right" && slideNumber < 6) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return(
        <div className="movielist">
            <span className="ListTitle">Now Showing </span>
            <div className="wrapper">
                <ArrowBackIosIcon
                    className="slideArrow left"
                    onClick={()=>handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="containerList" ref={listRef}>
                    <MovieListItem index={0}/>
                    <MovieListItem index={1}/>
                    <MovieListItem index={2}/>
                    <MovieListItem index={3}/>
                    <MovieListItem index={4}/>
                    <MovieListItem index={5}/>
                    <MovieListItem index={6}/>
                    <MovieListItem index={7}/>
                    <MovieListItem index={8}/>
                    <MovieListItem index={9}/>

                </div>
                <ArrowForwardIosIcon
                    className="slideArrow right"
                    onClick={()=>handleClick("right")}
                />
            </div>
        </div>
    )
}