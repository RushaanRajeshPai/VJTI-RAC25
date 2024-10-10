import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Carousel from './Carousel';
import '../stylesheets/Media.css';
// import i1 from "../assets/Media/i1.png";
// import i2 from "../assets/Media/i2.png";
// import i3 from "../assets/Media/i3.png";
// import i4 from "../assets/Media/i4.png";
// import i5 from "../assets/Media/i5.png";
// import i6 from "../assets/Media/i6.png";
// import i7 from "../assets/Media/i7.png";
// import i8 from "../assets/Media/i8.png";
// import i9 from "../assets/Media/i9.png";
// import i10 from "../assets/Media/i10.png";
// import i11 from "../assets/Media/i11.png";
// import i12 from "../assets/Media/i12.png";
// import i13 from "../assets/Media/i13.png";
// import i14 from "../assets/Media/i14.png";
// import i15 from "../assets/Media/i15.png";
// import i16 from "../assets/Media/i16.png";
// import i17 from "../assets/Media/i17.png";
// import i18 from "../assets/Media/i18.png";
// import i19 from "../assets/Media/i19.png";
// import i20 from "../assets/Media/i20.png";
// import i21 from "../assets/Media/i21.png"; 

import c1 from "../assets/Media/c1.png";
import c2 from "../assets/Media/c2.png";
import c3 from "../assets/Media/c3.png";
import c4 from "../assets/Media/c4.png";
import c5 from "../assets/Media/c5.png";
import c6 from "../assets/Media/c6.png";
import c7 from "../assets/Media/c7.png";
import c8 from "../assets/Media/c8.png";
import c9 from "../assets/Media/c9.jpg";
import c10 from "../assets/Media/c10.png";
import c11 from "../assets/Media/c11.jpg";
// import c12 from "../assets/Media/c12.png";
import c13 from "../assets/Media/c13.png";
import c14 from "../assets/Media/c14.jpg";
import c15 from "../assets/Media/c15.jpg";
import c16 from "../assets/Media/c16.jpg";
import c17 from "../assets/Media/c17.jpg";
// import w2 from "../assets/Media/w2.jpg";
// import w3 from "../assets/Media/w3.jpg";
import w1 from "../assets/Media/w1.jpg";
import w4 from "../assets/Media/w4.jpg";
import w5 from "../assets/Media/w5.jpg";
import w6 from "../assets/Media/w6.jpg";
import w7 from "../assets/Media/w7.jpg";
import w8 from "../assets/Media/w8.jpg";
import w9 from "../assets/Media/w9.jpg";
import w10 from "../assets/Media/w10.jpg";
import w11 from "../assets/Media/w11.jpg";
import w12 from "../assets/Media/w12.jpg";
import w13 from "../assets/Media/w13.png";
import w14 from "../assets/Media/w14.jpg";
import w15 from "../assets/Media/w15.jpg";
import w16 from "../assets/Media/w16.jpg";
import w17 from "../assets/Media/w17.jpg";
import w18 from "../assets/Media/w18.jpg";
import w19 from "../assets/Media/w19.jpg";
import w20 from "../assets/Media/w20.jpg";

import tv1 from "../assets/Media/tv1.mp4";
import tv2 from "../assets/Media/tv2.mp4";
import tv3 from "../assets/Media/tv3.mp4";
import tv4 from "../assets/Media/tv4.mp4";
import tv7 from "../assets/Media/tv7.mp4";
import tv8 from "../assets/Media/tv8.mp4";

import m1 from "../assets/Media/m1.jpg";
import m2 from "../assets/Media/m2.jpg";
import m3 from "../assets/Media/m3.jpg";
import m4 from "../assets/Media/m4.jpg";
// import m5 from "../assets/Media/m5.jpg";
import m6 from "../assets/Media/m6.jpg";
import mediabkg from '../assets/SponsorUs/3.png'

const Media = () => {
    const images1 = [
        { type: 'image', src: c1 },
        { type: 'image', src: c2 },
        { type: 'image', src: c3 },
        { type: 'image', src: c4 },
        { type: 'image', src: c5 },
        { type: 'image', src: c6 },
        { type: 'image', src: c7 },
        { type: 'image', src: c8 },
        { type: 'image', src: c9 },
        { type: 'image', src: c10 },
        { type: 'image', src: c11 },
        { type: 'image', src: c13 },
        { type: 'image', src: c14 },
        { type: 'image', src: c15 },
        { type: 'image', src: c16 },
        { type: 'image', src: c17 }
    ];
    const images2 = [
        { type: 'image', src: w1 },
        { type: 'image', src: w4 },
        { type: 'image', src: w5 },
        { type: 'image', src: w6 },
        { type: 'image', src: w7 },
        { type: 'image', src: w8 },
        { type: 'image', src: w9 },
        { type: 'image', src: w10 },
        { type: 'image', src: w11 },
        { type: 'image', src: w12 },
        { type: 'image', src: w13 },
        { type: 'image', src: w14 },
        { type: 'image', src: w15 },
        { type: 'image', src: w16 },
        { type: 'image', src: w17 },
        { type: 'image', src: w18 },
        { type: 'image', src: w19 },
        { type: 'image', src: w20 }
    ];
    const images3 = [
        { type: 'video', src: tv1 },
        { type: 'video', src: tv2 },
        { type: 'video', src: tv3 },
        { type: 'video', src: tv4 },
        { type: 'video', src: tv7 },
        { type: 'video', src: tv8 }
    ];
    const images4 = [
        { type: 'image', src: m1 },
        { type: 'image', src: m2 },
        { type: 'image', src: m3 },
        { type: 'image', src: m4 },
        { type: 'image', src: m6 }
    ];


    return (
        <>
            <div className='mediaEntire'><section>
                <title>Media</title>
                <Navbar />
            </section>
                <section>
                    <div
                        className="backgnd"
                    // style={{
                    //     backgroundImage: `url(${mediabkg})`,
                    //     backgroundRepeat: "repeat-x",
                    // }}
                    >
                        {/* <img src={bg} alt="" /> */}
                        <div className="darkenimage"></div>
                        {/* <span className="head">MEDIA</span> */}
                    </div>
                    <div
                        className="mediaimg"
                    // style={{ backgroundImage: `url(${mediabkg})`, backgroundRepeat: "repeat-x", }}
                    >
                    </div>
                    <div className="media-container">
                        <div className="media-carousel1">
                            <h2 className="carousel-heading" id='competition-heading'>COMPETITION</h2>
                            <Carousel media={images1} className="carouse" />
                        </div>
                        <div className="media-carousel">
                            <h2 className="carousel-heading">WORKSHOPS & ACTIVITIES</h2>
                            <Carousel media={images2} className="carouse" />
                        </div>
                        <div className="media-carousel">
                            <h2 className="carousel-heading">TESTING</h2>
                            <Carousel media={images3} className="carouse" />
                        </div>
                        <div className="media-carousel">
                            <h2 className="carousel-heading">MANUFACTURING</h2>
                            <Carousel media={images4} className="carouse" />
                        </div>

                    </div>
                </section ></div >
            <Footer />
        </>
    );
};

export default Media;