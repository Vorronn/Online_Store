import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.css"
import slide_1 from "../../../../../assets/images/slider_1.jpg";
import slide_2 from "../../../../../assets/images/slider_2.jpg";
import slide_3 from "../../../../../assets/images/slider_3.jpg";


const MainSlider = () => {
    const settings = {
        // dots: true
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className={styles.container}>
            <Slider {...settings}>
                <div>
                    <img src={slide_1} alt={""} />
                </div>
                <div>
                    <img src={slide_2} alt={""} />
                </div>
                <div>
                    <img src={slide_3} alt={""} />
                </div>
            </Slider>
        </div>

    )
}

export default MainSlider;