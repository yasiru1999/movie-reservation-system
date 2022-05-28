import React from "react";
import "../style/home.scss";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from "./Navbar";
import List from "./MovieList";
import Footer from "./Footer";

export default function Home({type}){

    const images = [
        'https://theatersollution.s3.amazonaws.com/27144d29-715a-4d47-8443-9ba84125f7fd.jpg',
        'https://theatersollution.s3.amazonaws.com/10462b2a-7c18-419a-8681-079660a2b97f.jpg',
        'https://theatersollution.s3.amazonaws.com/70573446-8374-4014-9734-4ebfc22b490c.jpg'
    ];

    return(
        <div>
            <div className="home">
                <Navbar />
            </div>
            <div className="featured">
                    <div className="slide-container images">
                        <Zoom scale={0.4}>
                            {
                                images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
                            }
                        </Zoom>
                    </div>

            </div>
            <div>
                <List />
            </div>

                <Footer />


        </div>
    )
}
