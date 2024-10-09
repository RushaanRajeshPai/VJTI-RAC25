/* eslint-disable no-unused-vars */
// import React from "react";
// import { useRef, React } from "react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Teams.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import forza from "../assets/Teams/forza.jpg";
import motorbg from "../assets/Teams/bgmotorbreath.jpg";
import forzabg from "../assets/Teams/bgforza.jpg";
// import sen1 from "../assets/Teams/Senate/sen1.jpg";
// import sen2 from "../assets/Teams/Senate/sen2.jpg";
// import sen3 from "../assets/Teams/Senate/sen3.jpg";

// Motorbreath team images (mb is prefix for all motorbreath members)
// Senate
import mbvivek from "../assets/Teams/Motorbreath/vivek wagadiya.jpg";
import mayur from "../assets/Teams/Motorbreath/mayurlohakare.jpg"
import ikshvaku from "../assets/Teams/Motorbreath/Chassis- Ikshvaku Kashikar.jpg";
import kaustubh from "../assets/Teams/Motorbreath/VD - Kaustubh Gaikwad.jpg";
import vansh from "../assets/Teams/Motorbreath/Chassis- Vansh Sonigra.jpg";
// Chassis
import punit from "../assets/Teams/Motorbreath/Chassis_-_Punit_Karani.jpg";
import tanmay from "../assets/Teams/Motorbreath/Chassis- Tanmay Patil.jpg";
import aditya from "../assets/Teams/Motorbreath/Chassis - Aditya Sadegaonkar.jpg";
// VD
import hrushikesh from "../assets/Teams/Motorbreath/VD- Hrushikesh Shinde.jpg";
import ishan from "../assets/Teams/Motorbreath/VD- Ishaan Joshi.jpg";
import ayush from "../assets/Teams/Motorbreath/VD- Ayush Parikh.jpg";
import rangan from "../assets/Teams/Motorbreath/VD- Rangan Bhattacharya.jpg";
// Power Trans
import ashish from "../assets/Teams/Motorbreath/PT- Ashish Patil.jpg";
import gaurav from "../assets/Teams/Motorbreath/PT- Gaurav Purohit .jpg";
import shubham from "../assets/Teams/Motorbreath/PT- Shubham Sawant.jpg";
import kendapadi from "../assets/Teams/Motorbreath/PT_-_Prem_Kendapadi.jpg";
// import mbvishwesh from "../assets/Teams/Motorbreath/vishwesh chauhan.jpg";
// Brakes
import tanaya from "../assets/Teams/Motorbreath/Brakes- Tanaya Ambalkar.jpg";
import aayush from "../assets/Teams/Motorbreath/Brakes - Aayush Joshi .jpg";
import raj from "../assets/Teams/Motorbreath/Brakes - Raj Cheke.jpg";
import harish from "../assets/Teams/Motorbreath/Brakes- Harish Dandekar.jpg";
// Electronics
import shlok from "../assets/Teams/Motorbreath/ET - Shlok Ghanwat.jpg";
import bhauwmik from "../assets/Teams/Motorbreath/ET- Bhaumik Raina.jpg";
import gunjan from "../assets/Teams/Motorbreath/ET- Gunjan Ghadge.jpg";
import siddharth from "../assets/Teams/Motorbreath/ET- Siddharth Jadhav.jpg";

const Teams = () => {
    const navigate = useNavigate();
    // const navigateToForza = () => {
    //     navigate("/Forza");
    // };
    const navigateToMotor = () => {
        navigate("/Motorbreath");
    };

    return (
        <div>
            <title>Teams</title>
            <Navbar />

            {/* Senate Section */}
            <div className="teams">
                {/* <section className="senate">
                    <span className="heading">CLUB SENATE</span>

                    
                    <div className="nonresponsive">
                        <div className="picsflex">
                            <div className="box">
                                <img src={sen1} alt="" />
                                <span>Madhusudhan Kulkarni</span>
                                <div className="line"></div>
                                <span>Joint General Secretary</span>
                                <span>Team Motorbreath</span>
                            </div>
                            <div className="box">
                                <img src={sen2} alt="" />
                                <span>Siddharth Sankhe</span>
                                <div className="line"></div>
                                <span>General Secretary</span>
                            </div>
                            <div className="box">
                                <img src={sen3} alt="" />
                                <span>Shivraj Parle</span>
                                <div className="line"></div>
                                <span>Joint General Secretary</span>
                                <span>Team ForzaVJTI</span>
                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="picsflex">
                            <div className="box">
                                <img src={sen2} alt="" />
                                <span>Siddharth Sankhe</span>
                                <div className="line"></div>
                                <span>General Secretary</span>
                            </div>
                        </div>
                        <div className="picsflex">
                            <div className="box">
                                <img src={sen3} alt="" />
                                <span>Shivraj Parle</span>
                                <div className="line"></div>
                                <span>Joint General Secretary</span>
                                <span>Team ForzaVJTI</span>
                            </div>
                            <div className="box">
                                <img src={sen1} alt="" />
                                <span>Madhusudhan Kulkarni</span>
                                <div className="line"></div>
                                <span>Joint General Secretary</span>
                                <span>Team Motorbreath</span>
                            </div>
                        </div>
                    </div>
                </section> */}

                <div className="whiteline"></div>

                {/* MotorBreath Section */}
                <section className="motorbreathbg">
                    <img src={motorbreath} alt="" className="bgimg" />
                    <div className="content">
                        <div className="box1">
                            <div className="line"></div>
                            <span className="team">TEAM</span>
                        </div>
                        <div className="box2">
                            <span className="teamname">MOTORBREATH</span>
                            <span className="baja">BAJA SAEINDIA</span>
                            <button onClick={navigateToMotor}>Know More</button>
                        </div>
                    </div>
                </section>

                <div className="whiteline"></div>

                {/* Forza Section */}
                {/* <section className="motorbreathbg forzabg">
                    <img src={forza} alt="" className="bgimg" />
                    <div className="content">
                        <div className="box2">
                            <div className="box1">
                                <span className="team">TEAM</span>
                                <div className="line"></div>
                            </div>
                            <span className="teamname">FORZAVJTI</span>
                            <span className="baja">INDIAN KARTING RACE</span>
                            <button onClick={navigateToForza}>Know More</button>
                        </div>
                    </div>
                </section> */}

                <div className="whiteline"></div>

                <Footer />
            </div>
        </div>
    );
};

export default Teams;
