import React, {useState} from "react";
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";


 
const Navbar = () => {

    const [active, setActive] = useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    const removeNav = () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>Odyssey Travels.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Testimonials</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle  className="icon"/>
                    </div>
                </div>


                <div onClick={showNav} className="toggleNavbar">
                    <HiMenu className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar