import React, { useEffect } from "react";
import './home.css'
import video from "../../Assets/homepage_video.mp4"
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { SiExpedia } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {


    useEffect (() => {
        Aos.init({duration:2000})
    },[])


    return(
        <section className="home">
            <div className="overlay"></div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>

                <div className="homeContent container">
                    <div className="textDiv">
                        <span data-aos = "fade-up" className="smallText">
                            Our Packages
                        </span>
                        <h1 data-aos = "fade-up" className="homeTitle">
                            Search Your Holiday
                        </h1>
                    </div>

                    <div data-aos = "fade-up" className="cardDiv grid">

                        <div className="destinationInput">
                            <label htmlFor="city">Search Your Destination :</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter Name Here..."/>
                                <GrLocation className="icon"/>
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">Select Your Date :</label>
                            <div className="input flex">
                                <input type="date" />
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Max Price : </label>
                                <h3 className="total">$10000</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" max="10000" min="2000"/>
                            </div>
                        </div>
                    </div>

                    <div data-aos = "fade-up" className="homeFooterIcons flex">

                        <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon"/>
                        <FaTripadvisor className="icon" />
                        <SiExpedia className="icon"/>
                        </div>

                        <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                        </div>

                    </div>
                </div>
        </section>
    )
}

export default Home

