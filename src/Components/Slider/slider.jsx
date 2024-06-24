import React, { useState, useEffect } from "react";
import './slider.css'
import data from "./data.js";

import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section data-aos = "fade-up"  className="sliderSection">
      <div className="sliderTitle">
        <h2>What People Say About Us</h2>
      </div>
      <div className="sliderSectioncenter">
        {people.map((item, indexPeople) => {
          const { id, image, name, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="sliderPersonimg" />
              <h4>{name}</h4>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)} >
        <FaArrowLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
