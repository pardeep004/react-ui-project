import { useEffect, useState } from "react";
import "./Carousel.css";

import slider1 from "../../assets/slider_1_sound.jpg";
import slider2 from "../../assets/slider_2_sound.jpg";
import slider3 from "../../assets/slider_3_sound.jpg";
import slider4 from "../../assets/slider_4_sound.jpg";

function Carousel() {

  const slides = [
    {
      image: slider1,
      title: "Unleash the Power of Sound with YSS",
      description:
        "Explore top-quality amplifiers, mixers, speakers, and more to elevate your audio experience.",
    },
    {
      image: slider2,
      title: "Premium Audio Equipment for Every Need",
      description:
        "Shop the best sound systems, microphones, and accessories at unbeatable prices.",
    },
    {
      image: slider3,
      title: "The Best in Sound Technology, Only at YSS",
      description:
        "Upgrade your sound game with premium audio equipment from YSS.",
    },
    {
      image: slider4,
      title: "Your One-Stop Shop for All Things Sound",
      description:
        "Whether it's for your home or the stage, we have the perfect audio solution for you.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="carousel">

      {slides.map((slide, index) => (

        <div
          className={`slide ${
            index === currentSlide ? "active" : ""
          }`}
          key={index}
        >

          <img src={slide.image} alt={slide.title} />

          <div className="slide-content">

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Carousel;