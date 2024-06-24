import React, { useEffect } from "react";
import './footer.css'
import video2 from "../../Assets/footer_video.mp4"
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { SiExpedia } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect (() => {
        Aos.init({duration:2000})
    },[])

    return(
        <section className="footer">
            <div className="videoDiv">
            <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos = "fade-up"  className="text">
                        <small>Keep In Touch</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos = "fade-up"  type="text" placeholder="Enter Your E-Mail"/>
                        <button data-aos = "fade-up"  className="btn flex" type="submit">
                            SEND <BsArrowUpRightSquareFill className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/>Odyssey Travels.
                            </a>
                        </div>

                        <div data-aos = "fade-up" className="footerParagraph">
                        Odyssey Travels is your gateway to bespoke travel experiences tailored to exceed expectations. 
                        Our expert team is dedicated to curating seamless and 
                        unforgettable travel experiences from iconic destinations to hidden gems, embark on a journey with 
                        Odyssey Travels and unlock the world's wonders with confidence and comfort.
                        </div>

                        <div data-aos = "fade-up"  className="footerSocials flex">
                            <FaTwitter className="icon"/>
                            <RiInstagramFill className="icon" />
                            <FaYoutube className="icon"/>
                            <FaTripadvisor className="icon" />
                            <SiExpedia className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos = "fade-up" data-aos-duration = "3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR COMPANY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Terms of Use
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Legal Information
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Payments
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Support
                            </li>


                        </div>

                        <div data-aos = "fade-up" data-aos-duration = "4000"  className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Discover
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Enterprise
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Trip Advisor
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                travelocity
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Expedia
                            </li>


                        </div>

                        <div data-aos = "fade-up" data-aos-duration = "5000"  className="linkGroup">
                            <span className="groupTitle">
                                ELEVENTH HOUR
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                New York
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Dubai
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                New Delhi
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icons" /> 
                                Tokyo
                            </li>

                        </div>
                    </div>

                    <div className="footerDiv flex">
                         <small>Nitish ChittoorKrishnamurthy &copy; 2024 All Rights Reserved</small>
                   </div>
                </div>
                

            </div>
            
        </section>
    )
}

export default Footer