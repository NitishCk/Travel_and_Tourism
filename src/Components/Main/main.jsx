import React, { useEffect } from "react";
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegListAlt } from "react-icons/fa";

import img1 from '../../Assets/miami.jpg'
import img2 from '../../Assets/barrier.jpg'
import img3 from '../../Assets/bali.jpg'
import img4 from '../../Assets/london.jpg'
import img5 from '../../Assets/tajmahal.jpg'
import img6 from '../../Assets/newyork.jpg'
import img7 from '../../Assets/paris.jpg'
import img8 from '../../Assets/kyoto.jpg'
import img9 from '../../Assets/venice.jpg'
import img10 from '../../Assets/malaysia.jpg'
import img11 from '../../Assets/victoriafalls.jpg'
import img12 from '../../Assets/yellowstone.jpg'
import img13 from '../../Assets/mountfuji.jpg'
import img14 from '../../Assets/amsterdam.jpg'
import img15 from '../../Assets/cappadocia.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const data = [
    {
        id:1,
        imgSrc: img1,
        destTitle: "Miami",
        location: "United States",
        rating : "8.9",
        fees: "$3500",
        description: "Miami, located in southeastern Florida, United States, is a vibrant and cosmopolitan city known for its cultural diversity, lively nightlife, and beautiful beaches. ",
        highlights : "South beach, Wynwood Walls, Little Havana"
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: "Great Barrier Reef",
        location: "Australia",
        rating : "9.5",
        fees: "$4000",
        description: "As a UNESCO World Heritage site, located in Australia, the Great Barrier Reef is a popular destination for diving and snorkeling, offering stunning underwater vistas.",
        highlights : "Whitsunday Islands, Cairns and the Outer Reef"
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: "Bali",
        location: "Indonesia",
        rating : "9.0",
        fees: "$3000",
        description: "Bali, an Indonesian island located in the westernmost end of the Lesser Sunda Islands, is renowned for its stunning landscapes, rich culture, and vibrant tourism.",
        highlights: "Ubud, Kuta and Seminyak, Uluwatu Temple and Bukit Peninsula"
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: "London",
        location: "United kingdom",
        rating : "8.3",
        fees: "$7500",
        description: "London, the capital of the United Kingdom, is famous for its world-class museums and galleries, including the British Museum, the Tate Modern, and the National Gallery.",
        highlights: "The Tower of London, The Houses of Parliament and Big Ben, London Eye"
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: "Taj Mahal",
        location: "India",
        rating : "8.1",
        fees: "$2000",
        description: "Located on the banks of Yamuna, Taj Mahal is renowned for its stunning architectural beauty, is a UNESCO World Heritage site and one of the New Seven Wonders of the World.",
        highlights: "Agra Fort, Mehtab Bagh, Fatehpur Sikri"
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: "Newyork Downtown",
        location: "United States",
        rating : "8.8",
        fees: "$6000",
        description: "New York city is one of the world's major financial capitals and is known for its iconic skyline, anchored by skyscrapers such as the Empire State Building and One World Trade Center." ,
        highlights: "Times Square, The Empire State Building, Statue of Liberty and Ellis Island"
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: "Paris",
        location: "France",
        rating : "9.1",
        fees: "$8500",
        description: "Paris, is home to iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, the Louvre Museum, and the Arc de Triomphe." ,
        highlights: "Eiffel Tower, Notre-Dame Cathedral, Montmartre and Sacré-Cœur Basilica"
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: "Kyoto",
        location: "Japan",
        rating : "8.6",
        fees: "$4000",
        description: "Kyoto, located in the Kansai region of Japan, is a city celebrated for its rich history, traditional culture, and stunning natural beauty. Kyoto is also famous for its seasonal beauty." ,
        highlights: "Kinkaku-ji (Golden Pavilion), Kiyomizu-dera, Fushimi Inari Taisha"
    },
    {
        id:9,
        imgSrc: img9,
        destTitle: "Venice",
        location: "Italy",
        rating : "9.7",
        fees: "$9500",
        description: "Venice is often referred to as The Floating City, is located in northeastern Italy, is an enchanting city renowned for its unique network of canals, rich history, and stunning architecture." ,
        highlights: "Grand Canal, Venetian Islands, Piazza San Marco"
    },
    {
        id:10,
        imgSrc: img10,
        destTitle: "Kuala Lumpur",
        location: "Malaysia",
        rating : "8.0",
        fees: "$6500",
        description: "Kuala Lumpur, the capital of Malaysia, is a vibrant and modern city known for its dynamic blend of cultures, impressive skyline, and diverse attractions." ,
        highlights: "Petronas Twin Towers, Batu Caves, Central Market and Chinatown"
    },
    {
        id:11,
        imgSrc: img11,
        destTitle: "Victoria Falls",
        location: "Zimbabwe",
        rating : "9.4",
        fees: "$10000",
        description: "Victoria Falls, located on the Zambezi River is one of the most spectacular natural wonders of the world. Victoria Falls is renowned for its awe-inspiring beauty and powerful cascades." ,
        highlights: "Victoria Falls Waterfall, Devil's Pool, Victoria Falls Bridge, Livingstone Island"
    },
    {
        id:12,
        imgSrc: img12,
        destTitle: "YellowStone",
        location: "Unite States",
        rating : "8.0",
        fees: "$3000",
        description: "Yellowstone National Park, is the oldest national park in the world. It is known for its geothermal features, diverse wildlife, and stunning landscapes." ,
        highlights: "Wildlife Viewing in Lamar Valley, Mammoth Hot Springs, Yellowstone Lake"
    },
    {
        id:13,
        imgSrc: img13,
        destTitle: "Mount Fuji",
        location: "Japan",
        rating : "8.4",
        fees: "$5000",
        description: "Mount Fuji's beauty and cultural significance make it a beloved symbol of Japan and a must-visit destination for travelers seeking natural beauty and cultural immersion.", 
        highlights: "Fuji Five Lakes, Chureito Pagoda, Fuji-Q Highland"
    },
    {
        id:14,
        imgSrc: img14,
        destTitle: "Amsterdam",
        location: "Netherlands",
        rating : "9.3",
        fees: "$6000",
        description: "Amsterdam, the capital city of the Netherlands, is known for its picturesque canals, historic architecture, vibrant cultural scene, and liberal attitudes." ,
        highlights: "Dam Square, Anne Frank House, Canal Ring"
    },
    {
        id:15,
        imgSrc: img15,
        destTitle: "Cappadocia",
        location: "Turkey",
        rating : "9.0",
        fees: "$9000",
        description: "Cappadocia, located in central Turkey, is a region renowned for its rich history like, extraordinary natural landscapes, unique rock formations, and rich cultural history." ,
        highlights: "Hot Air Balloon Ride, Uchisar Castle, Monks Valley"
    },

]

const Main = () => {
    useEffect (() => {
        Aos.init({duration:2000})
    },[])

    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos = "fade-right" className="title">Most Visited <span className="subTitle">Destinations</span></h3>
            </div>

            <div className="secContent grid">
                {
                    data.map(({id, imgSrc, destTitle, location, rating, fees, description, highlights}) => {
                        return(
                            <div key={id} data-aos = "fade-up" className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">

                                        <div className="rating">
                                            <span>Rating <small>{rating}</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <div className="highlyts">
                                        <p><b>Must Visit : </b>{highlights}</p>
                                    </div>

                                    <button className="btn flex">
                                        Details <FaRegListAlt className="icon"/>
                                    </button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main