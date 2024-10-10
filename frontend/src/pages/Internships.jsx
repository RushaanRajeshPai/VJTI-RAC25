/* eslint-disable no-unused-vars */
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../stylesheets/Internships.css";
// importing images
import motorbreath from "../assets/Teams/motorbreath.jpg";
import ashutosh from "../assets/Teams/Motorbreath/ashutoshmohapatra.jpg"
import shravani from "../assets/Teams/Motorbreath/shravani deshpande.jpg"
import rohan from "../assets/Internships/Rohan.png";
import jatin from "../assets/Internships/jatin.png";
import krish from "../assets/Internships/krish.png";
import atharva from "../assets/Internships/Atharva.png";
import chaitanya from "../assets/Internships/Chaitanya.png";
import harsh from "../assets/Internships/Harsh.png";
import siddharth from "../assets/Internships/siddharth.png";
import madhusugandh from "../assets/Internships/madhusugandh.png";
import ritesh from "../assets/Internships/Ritesh.png";
import chandrashekhar from "../assets/Internships/Chandrashekhar.png";
import kartika from "../assets/Internships/Kartika.png";
import shivam from "../assets/Internships/Shivam.png";
import shivraj from "../assets/Internships/Shivraj.png";
import shraddha from "../assets/Internships/Shraddha.png";
import samir from "../assets/Internships/samir.jpeg";
import niel from "../assets/Internships/niel james.jpeg";
import sahil from "../assets/Internships/sahil_dhoble.jpg";
import veer from "../assets/Internships/veer gupta.jpg";
import taran from "../assets/Internships/taran poojari.jpg";
import kunal from "../assets/Internships/Kunal.png";
import rajvardhan from "../assets/Internships/rajvardhan sawant.jpeg";
import sakshi from "../assets/Internships/sakshi chorghe.jpg";
import atharvab from "../assets/Internships/atharva bagwe.jpg";
import rahul from "../assets/Internships/rahul barbude.jpg";
import vivek from "../assets/Internships/vivek wagadiya.jpg";
import devg from "../assets/Internships/dev ganatra.jpg";
import kartik from "../assets/Internships/kartik kedare.jpg";
import jateen from "../assets/Internships/jateen telange.jpeg";
import grishma from "../assets/Internships/grishma balgi.jpg";
import omkar from "../assets/Internships/omkar ahir.jpg";
import flavia from "../assets/Internships/flavia saldanha.jpg";
import kunaldod from "../assets/Internships/kunal dodani.jpg";
import ashwin from "../assets/Internships/ashwin dias.jpg";
// backgnd imgs
import bg1 from "../assets/Internships/plane.png";
import csir from "../assets/Internships/7.png";
import csir_mobile from "../assets/Internships/7_copy.png";
import barc from "../assets/Internships/9.png";
import logo from "../assets/Internships/barc.png";
import bg2 from "../assets/Internships/10.png";
import tifrbc from "../assets/Internships/tifrbc.jpg";
import tifrlogo from "../assets/Internships/tifrlogo.png";
import schneiderbc from "../assets/Internships/schneiderbc.png";
import mahindra from "../assets/Internships/mahindra.png";
import ohiouni from "../assets/Internships/ohiouni.png";
import ursc from "../assets/Internships/ursc.png";
// import logo2 from "../assets/Internships/mitacs.png";
// import logo3 from "../assets/Internships/Ohio.png";
import bg3 from "../assets/Internships/11.png";
import bg4 from "../assets/Internships/12.png";
import logo4 from "../assets/Internships/crompton.png";
import logo5 from "../assets/Internships/ir.png";
import logo6 from "../assets/Internships/tata.png";
import logo7 from "../assets/Internships/glatt.png";
import logo8 from "../assets/Internships/L&T.png";
import drdologo from "../assets/Internships/drdologo.png";
import thermaxlogo from "../assets/Internships/thermaxlogo.png";
import godrejprecision from "../assets/Internships/godrejprecision.png";
import godrejaerospace from "../assets/Internships/godrejaerospace.png";

const Internships = () => {
    return (
        <>
            <title>Internships</title>
            <Navbar />

            <section className="internshipsbg">
                <img src={motorbreath} alt="" />
                <div className="darkenimage"></div>
                <span>INTERNSHIPS</span>
            </section>

            {/* <div className="whiteline"></div> */}
            <section>
                <div
                    className="CSIR"
                    style={{
                        backgroundImage: `url(${bg1})`,
                    }}
                >
                    <div className="head">
                        <img src={csir} alt="" />
                        <img src={csir_mobile} alt="" />
                    </div>
                    <span>
                        <i>RESEARCH INTERNS</i>
                    </span>
                    <div className="pics">
                        <div className="box1">
                            <img src={niel} alt="" />
                            <span>NIEL JAMES</span>
                        </div>
                        <div className="box1">
                            <img src={sahil} alt="" />
                            <span>SAHIL DHOBLE</span>
                        </div>
                        {/* <div className="box1">
                            <img src={harsh} alt="" />
                            <span>HARSH KUBADIA</span>
                        </div>
                        <div className="box1">
                            <img src={ritesh} alt="" />
                            <span>RITESH JAGTAP</span>
                        </div>
                        <div className="box1">
                            <img src={atharva} alt="" />
                            <span>ATHARVA BHOSALE</span>
                        </div> */}
                    </div>
                </div>

                <div
                    className="BARC"
                    style={{
                        backgroundImage: `url(${barc})`,
                    }}
                >
                    <span className="barc-head">BARC</span>
                    <br />
                    <span className="barc-head2" id="researchInternsHeader">RESEARCH INTERNS</span>

                    <div className="barc-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="pics">
                        <div className="box1">
                            <img src={veer} alt="" />
                            <span>VEER GUPTA</span>
                        </div>

                        <div className="box1" >
                            <img src={taran} style={{ objectFit: "fill" }} alt="" />
                            <span>TARAN POOJARI</span>
                        </div>
                        <div className="box1">
                            <img src={kunal} alt="" />
                            <span>KUNAL BOROLE</span>
                        </div>
                    </div>
                    <div className="pics">
                        <div className="box1">
                            <img src={rajvardhan} alt="" />
                            <span>RAJVARDHAN SAWANT</span>
                        </div>
                        <div className="box1">
                            <img src={sakshi} alt="" />
                            <span>SAKSHI <br />CHORGHE</span>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div
                    className="BARC"
                    style={{
                        backgroundImage: `url(${tifrbc})`,
                    }}
                >
                    <span className="barc-head" id="tifr-head">TIFR</span>
                    <br />
                    <span className="barc-head2" id="researchInternsHeader2">RESEARCH INTERNS</span>

                    <div className="barc-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="pics">
                        <div className="box30">
                            <img src={vivek} alt="" />
                            <span>VIVEK WAGADIYA</span>
                        </div>

                        <div className="box30">
                            <img src={devg} alt="" />
                            <span>DEV <br />GANATRA</span>
                        </div>
                        {/* <div className="box1">
                            <img src={kunal} alt="" />
                            <span>KUNAL BOROLE</span>
                        </div> */}
                    </div>
                    <div className="pics">
                        <div className="box30">
                            <img src={kartik} style={{ objectFit: "fill" }} alt="" />
                            <span>KARTIK <br />KEDARE</span>
                        </div>
                        <div className="box30">
                            <img src={jateen} alt="" />
                            <span>JATEEN <br /> TELANGE</span>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div
                    className="BARC"
                    style={{
                        backgroundImage: `url(${schneiderbc})`,
                    }}
                >
                    <span className="barc-head" id="schneider-head">Schneider Electric</span>
                    <br />
                    <span className="barc-head2" id="schneider-head1">RESEARCH INTERNS</span>

                    <div className="barc-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="pics">
                        <div className="box20">
                            <img src={grishma} alt="" />
                            <span>GRISHMA <br />BALGI</span>
                        </div>

                        <div className="box20">
                            <img src={omkar} alt="" />
                            <span>OMKAR <br />AHIR</span>
                        </div>
                        {/* <div className="box1">
                            <img src={kunal} alt="" />
                            <span>KUNAL BOROLE</span>
                        </div> */}
                    </div>
                    {/* <div className="pics">
                        <div className="box1">
                            <img src={kartik} alt="" />
                            <span>KARTIK KEDARE</span>
                        </div>
                        <div className="box1">
                            <img src={jateen} alt="" />
                            <span>JATEEN TELANGE</span>
                        </div>
                    </div> */}
                </div>
            </section >

            <section>
                <div
                    className="research"
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                    }}
                >
                    <div className="whitediv">
                        <span>
                            <i>RESEARCH INTERNS</i>
                        </span>
                        <div className="grid">
                            <div className="pics">
                                <img src={drdologo} alt="" />
                                <div className="box1">
                                    <img src={ashutosh} alt="" />
                                    <span>ASHUTOSH MOHAPATRA</span>
                                    <h4>
                                        <i>
                                            DRDO <br /> BANGLORE
                                        </i>
                                    </h4>
                                </div>
                                <div className="box1">
                                    <img src={kunaldod} style={{ objectFit: "fill" }} alt="" />
                                    <span>KUNAL <br />DODANI</span>
                                    <h4>
                                        <i>
                                            RIYA, OHIO STATE UNIVERSITY
                                        </i>
                                    </h4>
                                </div>
                                <img src={ohiouni} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="mitacs2"
                style={{
                    backgroundImage: `url(${bg3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                }}
            >
                <div className="whitediv">
                    {/* <span>
                        <i>RESEARCH INTERNS</i>
                    </span> */}
                    <div className="pics">
                        <img src={godrejaerospace} alt="" />
                        <div className="box1">
                            <img src={rahul} alt="" />
                            <i>
                                <span>RAHUL</span>
                                <br />
                                <span>BARBUDE</span>
                                <h4>GODREJ AEROSPACE</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={atharvab} alt="" />
                            <i>
                                <span>ATHARVA BAGWE</span>
                                <h4>GODREJ PRECISION</h4>
                            </i>
                        </div>
                        <img src={godrejprecision} alt="" />
                    </div>
                </div>
            </section>

            <section
                className="mitacs3"
                style={{
                    backgroundImage: `url(${bg4})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                }}
            >
                <div className="whitediv">
                    <div className="pics">
                        <div className="box1">
                            <img src={shravani} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <div ><img src={thermaxlogo} className="company" alt="" /></div>
                            {/* </div> */}
                            <i>
                                <span>SHRAVANI DESHPANDE</span>
                                <h4>RESEARCH INTERN</h4>
                                <h4>THERMAX</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={ashwin} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <img src={mahindra} className="company" alt="" />
                            {/* </div> */}
                            <i>
                                <span>ASHWIN DIAS</span>
                                <h4>MANUFACTURING INTERN</h4>
                                <h4>MAHINDRA & MAHINDRA <br /> PUNE</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={flavia} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <img src={ursc} className="company" alt="" />
                            {/* </div> */}
                            <i>
                                <span>FLAVIA SALDHANA</span>
                                <h4>RESEARCH INTERN</h4>
                                <h4>URSC <br /> BANGALORE</h4>
                            </i>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
};

export default Internships;
