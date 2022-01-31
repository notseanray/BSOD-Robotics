import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from "./slides/slide1.png";
import slide2 from "./slides/slide2.png";
import slide3 from "./slides/slide3.png";

const images = [slide1, slide2, slide3];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {images.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <img key={index} style={{width: "100%"}} src={slideImage} />
                    </div>
                ))} 
            </Slide>
        </div>
    )
}

export default Slideshow;