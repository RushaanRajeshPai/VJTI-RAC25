/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '@fontsource/inter';

import "../stylesheets/SponsorUs.css";
import bckgd from "../assets/SponsorUs/bckgd.jpg";
import bg1 from "../assets/SponsorUs/3.png";

import alflogo from '../assets/SponsorUs/alflogo.png'
import patvinlogo from '../assets/SponsorUs/patvinlogo.png'
import godrejlogo from '../assets/SponsorUs/godrejlogo.png'
import mtclogo from '../assets/SponsorUs/mtclogo.png'
import reliancelogo from '../assets/SponsorUs/reliancelogo.png'
import iologo from '../assets/SponsorUs/iologo.png'
import pradmanlogo from '../assets/SponsorUs/pradmanlogo.png'
import banchemlogo from '../assets/SponsorUs/banchemlogo.png'
import pglogo from '../assets/SponsorUs/pglogo.png'
import alumnilogo from '../assets/SponsorUs/alumnilogo.png'
import rampralogo from '../assets/SponsorUs/rampralogo.png'
import ctlogo from '../assets/SponsorUs/ctlogo.png'
import hflogo from '../assets/SponsorUs/hflogo.png'
import swlogo from '../assets/SponsorUs/swlogo.png'
import altairlogo from '../assets/SponsorUs/altairlogo.png'
import ansyslogo from '../assets/SponsorUs/ansyslogo.png'
import mescologo from '../assets/SponsorUs/mescologo.png'
import mkslogo from '../assets/SponsorUs/mkslogo.png'
import technova from '../assets/SponsorUs/technova.png'
import urwish from '../assets/SponsorUs/urwish.png'
import tsm from '../assets/SponsorUs/tsm.png'

import abline from '../assets/SponsorUs/abline.png'
import perks from '../assets/SponsorUs/perks.png'
import call from '../assets/SponsorUs/call.png'
import download from '../assets/SponsorUs/download.png'
// import purpleline from '../assets/SponsorUs/purpleline.png'


const SponsorUs = () => {
    const handleInstagramRedirect = () => {
        window.location.href = "https://forms.gle/27VrFDpBFi2jUy129"; // Link to Instagram
    };

    return (
        <>
            <title>Sponsor Us</title>
            <Navbar />

            {/* First Background image section */}
            <section className="sponsorbg">
                <img src={bckgd} alt="" />
                <span>SPONSOR US</span>
            </section>

            < section
                className="sponsorsection"
            >
                <div className="currentspons">
                    {/* <h1>SPONSORSHIP</h1> */}
                    <div className="sponsorAbout">
                        <h1 id="SponsAboutUs">About Us</h1>
                        <div id="abline"><img src={abline} alt="" /></div>
                        <p id="abpara1">Established in 2008, VJTI Racing is a student organisation for all automobile enthusiasts in the institution. <br />The team provides a platform for young engineers to bring their innovative ideas into action through the <br />various global competitions and workshops we participate in every year.
                        </p>
                        <p id="abpara2">A youthful spark and the drive to engineer an end product to be proud of, is a vision shared by all the <br />members of the club.</p>
                        <div className="aboutParts">
                            <div className="aboutPart1">
                                <div id="perksimg">
                                    <img src={perks} alt="" />
                                </div>
                                <button id="aboutButtons2" onClick={() => {
                                    const tiersSection = document.getElementById("tiersSection");
                                    if (tiersSection) {
                                        tiersSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }} >
                                    Tiers & Perks
                                </button>
                            </div>
                            <div className="aboutPart2">
                                <div id="callimg">
                                    <img src={call} alt="" />
                                </div>
                                <button id="aboutButtons" onClick={() => {
                                    const contactSection = document.getElementById("contactSection");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}>
                                    Contact Us
                                </button>
                            </div>
                            <div className="aboutPart3">
                                <div id="downloadimg">
                                    <img src={download} alt="" />
                                </div>
                                <button id="aboutButtons1" onClick={() => window.open("https://drive.google.com/file/d/176m-W0rt6LVeWYCEZcVbCN5aezxXvMRg/view", "_blank")}>
                                    Brochure
                                </button>
                            </div>
                        </div>

                        <div
                            className="tiers1" id="tiersSection"
                        // style={{
                        //     backgroundImage: `url(${bg1})`,
                        //     backgroundSize: "cover",
                        //     backgroundRepeat: "no-repeat",
                        // }}
                        >
                            <span className="ok">Tiers</span>
                            <div id="abline1"><img src={abline} alt="" /></div>
                            <div className="all">
                                <div className="tier">
                                    <div className="before">
                                        <span>SILVER</span>
                                        <br />
                                        <span> &#8377;25,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Post on Social Media Platforms</li>
                                            <li>Link on Website</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tier">
                                    <div className="before">
                                        <span>GOLD</span>
                                        <br />
                                        <span>&#8377;50,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Logo on Standees & Brochure</li>
                                            <li>Quarterly Social Shoutouts</li>
                                            <li>All SILVER benefits</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tier">
                                    <div className="before">
                                        <span>PLATINUM</span>
                                        <br />
                                        <span>&#8377;1,00,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Logo on the Team Jersey</li>
                                            <li>All GOLD benefits</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tier">
                                    <div className="before">
                                        <span>DIAMOND</span>
                                        <br />
                                        <span>&#8377;1,50,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Enlarged logo on the ATV and Event Posters</li>
                                            <li>All PLATINUM benefits</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tier">
                                    <div className="before">
                                        <span>CHIEF SPONSOR</span>
                                        <br />
                                        <span>&#8377;2,00,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Quarterly reels on Social Media</li>
                                            <li>All DIAMOND benefits</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tier">
                                    <div className="before">
                                        <span>TITLE SPONSOR</span>
                                        <br />
                                        <span>&#8377;2,50,000+</span>
                                    </div>
                                    <div className="after">
                                        <ul>
                                            <li>Influence on ATV paint job</li>
                                            <li>Sponsor centric T-shirts</li>
                                            <li>All Chief Sponsor benefits</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="tier">
                                    <div className="before">
                                        <span>DIAMOND</span>
                                        <br />
                                        <span>&#8377;20000&#43;</span>
                                    </div>

                                    <div className="after">
                                        <ul>
                                            <li>NAME ON ATV</li>
                                            <li>STICKER & BADGE</li>
                                            <li>CERTIFICATE OF GRATITUDE</li>
                                            <li>POSTER</li>
                                            <li>WRIST BAND</li>
                                            <li>VJTI RACING T-SHIRT</li>
                                            <li>EXCULSIVE ENTRY TO ALL CLUB EVENTS</li>
                                            <li>SPECIAL MENTION ON WEBSITE</li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <h1 id="CurrentSponsh1">Current Sponsors</h1>
                        <div id="abline"><img src={abline} alt="" /></div>
                    </div>

                    <div className="alfmsg">
                        <div className="alfLeft">
                            <img src={alflogo} alt="" id="abc" />
                        </div>
                        <div className="alfRight">
                            <p>As our Title Sponsor, ALF Engineering Ltd. is instrumental in driving VJTI <br />Racing Club's success. Their expertise in automotive component <br />manufacturing aligns perfectly with our mission, enabling us to innovate <br />and excel in competitions like SAE eBaja. We sincerely thank ALF <br />Engineering Ltd. for their unwavering support and commitment to our <br />growth as a leading collegiate racing team.</p>
                        </div>
                    </div>

                    <div className="patvinmsg">
                        <div className="patvinRight" id="cba">
                            <p>As our Chief Sponsor, Patvin has been instrumental in driving VJTI <br />Racing's pursuit of innovation and excellence. Their generous support <br /> has equipped us with the essential resources and the technical expertise <br />needed to excel in projects such as SAE eBaja, where we are dedicated <br />to developing sustainable electric vehicles.Aligned with Patvin's motto, <br />“We Make. We Solve,” our team is committed to engineering creative <br />solutions to real-world challenges. </p>
                        </div>
                        <div className="alfLeft">
                            <img src={patvinlogo} alt="" />
                        </div>
                    </div>

                    <div className="godrejmsg">
                        <div className="alfLeft">
                            <img src={godrejlogo} alt="" id="abc" />
                        </div>
                        <div className="alfRight">
                            <p>As our esteemed manufacturing partner, Godrej & Boyce provides vital support <br />to VJTI Racing Club, enabling us to turn our engineering concepts into reality. <br />Their unparalleled expertise in manufacturing and commitment to innovation <br />empower us to excel in competitions like SAE eBaja. We are deeply grateful to <br />Godrej & Boyce for their invaluable contribution to our team's growth and <br />success.
                            </p>
                        </div>
                    </div>

                    <div className="mtcmsg">
                        <div className="patvinRight" id="cba">
                            <p>As our dedicated sustainability partner, MTC Group plays a crucial role in <br />guiding VJTI Racing Club towards eco-friendly engineering practices. <br />Their commitment to sustainable development aligns with our mission <br />to innovate responsibly in competitions like SAE eBaja. We sincerely <br />thank MTC Group for their support in helping us grow while prioritizing <br />sustainability.</p>
                        </div>
                        <div className="alfLeft">
                            <img src={mtclogo} alt="" />
                        </div>
                    </div>

                    <div className="iomsg">
                        <div className="alfLeft">
                            <img src={iologo} alt="" id="abc" />
                        </div>
                        <div className="ioRight">
                            <p>As a key partner, Indian Oil provides essential support that fuels VJTI Racing <br />Club's ambitions. Their expertise in energy solutions and commitment to <br />excellence align with our goals in competitions like SAE eBaja. We deeply <br />appreciate Indian Oil's contribution to our success and growth.</p>
                        </div>
                    </div>

                    <div className="reliancemsg">
                        <div className="relianceRight" id="cba">
                            <p>Reliance Industries is a key partner, providing vital support that drives <br />VJTI Racing Club's success in competitions like SAE eBaja. We appreciate their significant contribution to our growth and achievements.</p>
                        </div>
                        <div className="alfLeft" >
                            <img src={reliancelogo} alt="" id="cba2" className="ambani" />
                        </div>
                    </div>

                    <div className="pradmanmsg">
                        <div className="alfLeft">
                            <img src={pradmanlogo} alt="" id="abc" />
                        </div>
                        <div className="pradmanRight">
                            <p>Pradman is an essential partner, delivering the support that fuels VJTI <br />Racing Club's success in competitions like SAE eBaja. We are grateful for <br />their significant role in our team's growth and accomplishments.</p>
                        </div>
                    </div>

                    <div className="banchemmsg">
                        <div className="banchemRight" id="cba">
                            <p>Ban Chem is a vital partner, offering essential support that enhances <br />VJTI Racing Club's performance in competitions like SAE eBaja. We value <br />their significant contribution to our success and growth.
                            </p>
                        </div>
                        <div className="alfLeft">
                            <img src={banchemlogo} alt="" />
                        </div>
                    </div>

                    <div id="finalDiv">
                        <div className="sponsor3boxes">
                            <div className="sponsor1box">
                                <img src={pglogo} alt="" />
                            </div>
                            <div className="sponsor2box">
                                <img src={alumnilogo} alt="" />
                            </div>
                            <div className="sponsor3box">
                                <img src={rampralogo} alt="" />
                            </div>
                        </div>

                        <div className="sponsor3boxes">
                            <div className="sponsor1box">
                                <img src={ctlogo} alt="" />
                            </div>
                            <div className="sponsor2box">
                                <img src={mkslogo} alt="" />
                            </div>
                            <div className="sponsor3box">
                                <img src={hflogo} alt="" />
                            </div>
                        </div>

                        <div className="sponsor3boxes">
                            <div className="sponsor1box">
                                <img src={technova} alt="" />
                            </div>
                            <div className="sponsor1box">
                                <img src={mescologo} alt="" />
                            </div>
                            <div className="sponsor3box">
                                <img src={urwish} alt="" />
                            </div>
                        </div>

                        <div className="sponsor3boxes">
                            <div className="sponsor1box">
                                <img src={swlogo} alt="" />
                            </div>
                            <div className="sponsor2box">
                                <img src={altairlogo} alt="" />
                            </div>
                            <div className="sponsor3box">
                                <img src={ansyslogo} alt="" />
                            </div>
                        </div>

                        <div className="sponsor3boxes">
                            <div className="sponsor1box">
                                <img src={tsm} alt="" />
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <Footer />
        </>
    );
};

export default SponsorUs;