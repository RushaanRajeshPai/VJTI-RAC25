// import { useRef, React } from "react";
import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../stylesheets/Teams.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import motorbg from "../assets/Teams/bgmotorbreath.jpg";

// Motorbreath team images (mb is prefix for all motorbreath members)
// Senate
import rehan from "../assets/Teams/Motorbreath/rehan.png";
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
import anuj from "../assets/Teams/Motorbreath/ET- Anuj Walanju.jpg";

//Forza Team images (fz prefix for forza)
// Heads
// ams / Forza / om khairnar.jpg";
// import fzpranjal from "../assets/Teams/Forza/pranjal patil.jpg";
// import fztanmay from "../assets/Teams/Forza/tanmay dikey.jpg";
// import fzmedha from "../assets/Teams/Forza/medha sati.jpg";
// import fzkartik from "../asseimport fzvishal from "../assets/Teams / Forza / vishal sejpal.jpg";
// import fzjash from "../assets/Teams/Forza/jash shah.jpg";

// // S&D
// import fzsonal from "../assets/Teams/Forza/Sonal Baranwal.jpg";
// import fzyash from "../assets/Teams/Forza/yash rajput.jpg";
// import fzvivek from "../assets/Teams/Forza/vivek wagadiya.jpg";
// import fzaryan from "../assets/Teams/Forza/aryan patil.jpg";

// // Brakes
// // import fzniel from "../assets/Teams/Forza/aryan 		.jpg";
// import fzaditya from "../assets/Teams/Forza/aditya ambalvar.jpg";

// // Power trans
// import fzgaurav from "../assets/Teams/Forza/gaurav manuja.jpg";
// // import fzpranjal from "../assets/Teams/Forza/aditya ambalvar.jpg";
// import fzom from "../assets/Tets/Teams/Forza/kartik mahalle.jpg";
// import fzneil from "../assets/Teams/Forza/niel.png";

// // Electronics
// import fzharsh from "../assets/Teams/Forza/harsh deosthali.jpeg";
// import fzgauravp from "../assets/Teams/Forza/gaurav patil.jpg";
// import fzanish from "../assets/Teams/Forza/anish dhar.jpg";
// import fzaditi from "../assets/Teams/Forza/aditi shinde.jpg";

const MotorBreath = () => {
    return (
        <>
            <Navbar />

            {/* Motorbreath Team */}
            <section className="motorbreath">
                <div
                    className="motorbg"
                    style={{ backgroundImage: `url(${motorbg})` }}
                >
                    <div className="content">
                        <span className="heading">SENATE</span>
                        <div className="picsflex">
                            <div className="box">
                                <img src={rehan} alt="" />
                                <span>Mohd. Rehan Shaikh</span>
                                <span>
                                    <i>Captain</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mayur} alt="" />
                                <span>Mayur Lohakare</span>
                                <span>
                                    <i>Vice - Captain</i>
                                </span>
                            </div>
                        </div>
                        <div className="picsflex">
                            <div className="box">
                                <img src={ikshvaku} alt="" />
                                <span>Ikshvaku Kashikar</span>
                                <span>
                                    <i>Static Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={kaustubh} alt="" />
                                <span>Kaustubh Gaikwad</span>
                                <span>
                                    <i>Sponsorship Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={vansh} alt="" />
                                <span>Vansh Sonigra</span>
                                <span>
                                    <i>Treasurer</i>
                                </span>
                            </div>
                        </div>

                        {/* Chassis members */}
                        <span className="heading">CHASSIS</span>
                        <div className="picsflex chassis margin_neg">
                            <div className="box">
                                <img src={punit} alt="" />
                                <span>Punit Karani</span>
                            </div>
                            <div className="box">
                                <img src={ikshvaku} alt="" />
                                <span>Ikshvaku Kashikar</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={tanmay} alt="" />
                                <span>Tanmay Patil</span>
                            </div>
                        </div>
                        <div className="picsflex chassis">
                            <div className="box" id="boxy">
                                <img src={vansh} alt="" />
                                <span>Vansh Sonigra</span>
                            </div>
                            <div className="box" id="boxy">
                                <img src={aditya} alt="" />
                                <span>Aditya Sadegaonkar</span>
                            </div>
                            <div className="box" id="boxy">
                                <img src={rehan} alt="" />
                                <span>Rehan Shaikh</span>
                            </div>
                        </div>

                        {/* Vehicle dynamics members */}
                        <span className="heading">VEHICLE DYNAMICS</span>
                        <div className="picsflex chassis powertrans ">
                            <div className="box">
                                <img src={hrushikesh} alt="" />
                                <span>Hrushikesh Shinde</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={ishan} alt="" />
                                <span>Ishaan Joshi</span>
                            </div>
                        </div>
                        <div className="picsflex chassis powertrans">
                            <div className="box">
                                <img src={ayush} alt="" />
                                <span>Ayush Parikh</span>
                            </div>
                            <div className="box">
                                <img src={rangan} alt="" />
                                <span>Rangan Bhattacharya </span>
                            </div>
                            <div className="box">
                                <img src={kaustubh} alt="" />
                                <span>Kaustubh Gaikwad</span>
                            </div>
                        </div>

                        {/* Power Transmission members */}
                        <span className="heading">POWER TRANSMISSON</span>
                        <div className="picsflex chassis powertrans ">
                            <div className="box">
                                <img src={ashish} alt="" />
                                <span>Ashish Patil</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mayur} alt="" />
                                <span>Mayur Lohakare</span>
                            </div>
                        </div>
                        <div className="picsflex chassis powertrans">
                            <div className="box">
                                <img src={gaurav} alt="" />
                                <span>Gaurav Purohit</span>
                            </div>
                            <div className="box">
                                <img src={shubham} alt="" />
                                <span>Shubham Sawant</span>
                            </div>
                            <div className="box">
                                <img src={kendapadi} alt="" />
                                <span>Prem Kendapadi</span>
                            </div>
                        </div>

                        {/* Brakes members */}
                        <span className="heading">BRAKES</span>
                        <div className="picsflex chassis brakes">
                            {/* brake1 class used to give negative margin to box so that top and bottom flex mixes */}
                            <div className="box ">
                                <img src={tanaya} alt="" />
                                <span>Tanaya Ambalkar</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box ">
                                <img src={aayush} alt="" />
                                <span>Aayush Joshi</span>
                            </div>
                        </div>
                        <div className="picsflex chassis brakes">
                            <div className="box">
                                <img src={raj} alt="" />
                                <span>Raj Cheke</span>
                            </div>
                            <div className="box">
                                <img src={harish} alt="" />
                                <span>Harish Dandekar</span>
                            </div>
                        </div>
                        {/* Electronics members */}
                        <span className="heading">ELECTRONICS</span>
                        <div className="elexbox">
                            <div className="picsflex chassis powertrans ">
                                <div className="box">
                                    <img src={anuj} alt="" />
                                    <span>Anuj Walanju</span>
                                    <span>
                                        <i>Sector Head</i>
                                    </span>
                                </div>
                                <div className="box">
                                    <img src={gunjan} alt="" />
                                    <span>Gunjan Ghadge</span>
                                </div>
                            </div>
                            <div className="picsflex chassis powertrans">
                                <div className="box">
                                    <img src={bhauwmik} alt="" />
                                    <span>Bhauwmik Raina</span>
                                </div>
                                <div className="box">
                                    <img src={shlok} alt="" />
                                    <span>Shlok Ghanwat</span>
                                </div>
                                <div className="box">
                                    <img src={siddharth} alt="" />
                                    <span>Siddharth Jadhav</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="whiteline"></div>
            <Footer />
        </>
    );
};

export default MotorBreath;
