"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import logo from "../../public/logo.webp"
import Designbuild from "../../public/Designbuild.png"

const Footer = () => {
    return (
        <section className="overflow-hidden mt-11 footerbg">
            <div className="px-6 py-12 z-index:9 text-center md:px-12  lg:text-left">
                <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className='item-center mt-3 mb-6 grid grid-cols-1 gap-3 lg:px-12 md:px-8'>
                        <div className='ml-24' >
                            <Image
                                src={Designbuild}
                                alt="Logo"
                                width={551}
                                height={115}
                            ></Image>
                        </div>
                    </div>
                    <div className="grid  lg:grid-cols-2">
                        <div>
                            <div className=" text-center grid grid-rows-1 gap-3 lg:px-12 md:px-8">
                                <div className='mb-2' >
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={171}
                                        height={115}
                                    ></Image>
                                </div>
                                <div className='text-left' >
                                    <h1
                                        className="text-3xl text-white  font-semithin tracking-tight md:text-2xl xl:text-2xl">
                                        let's build
                                    </h1>
                                    <h1
                                        className="text-3xl text-white  font-semibold tracking-tight md:text-2xl xl:text-3xl">
                                        something awesome
                                    </h1>
                                </div>
                                <div>
                                    <p className="font addres text-white text-left">
                                        #503, 5th Floor, Hari Alokik Heights, Subhash Nagar, near Ahinsa Circle, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001
                                    </p>
                                </div>
                                <div>
                                    <p className=" font-semibold text-white text-left">
                                        sales@webnautical.com
                                    </p>
                                </div>
                                <div >
                                    <p className=" font-semibold text-white text-left">
                                        +91 9530488844
                                    </p>
                                </div>
                                <div className='flex space-x-2'>
                                    <div>
                                    <img width="38" height="38" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                                    </div>
                                    <div>
                                    <img width="38" height="38" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>
                                    </div>
                                    <div>
                                    <img width="38" height="38" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                                    </div>   
                                    <div>
                                    <img width="38" height="38" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="item-center mt-6 grid grid-rows-1 gap-1  lg:px-12 md:px-8">

                                <div className="grid text-left mt-3 -ml-24 lg:grid-cols-3">

                                    <div className='space-y-3'>
                                        <p className="smalltxsize text-white font ">
                                            <span className='flex' > Quick Links <img width="19" height="16" src="https://img.icons8.com/fluency/48/link.png" alt="link" /> </span>
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            About Us
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            Our Work
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Career
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Testimonials
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            contact
                                        </p>
                                    </div>

                                    <div className='space-y-3'>
                                        <p className="smalltxsize text-white font ">
                                            <span className='flex' > Legal <img width="19" height="16" src="https://img.icons8.com/fluency/48/link.png" alt="link" /> </span>
                                        </p>
                                        <p className=" smalltxsize text-white font ">
                                            Term of Service
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            Privacy Policy
                                        </p>
                                        <p className=" text-white font ">
                                            Refund Policy
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Support
                                        </p>
                                    </div>

                                    <div className='space-y-3'>
                                        <p className="smalltxsize text-white font ">
                                            <span className='flex' > Expertise <img width="19" height="16" src="https://img.icons8.com/fluency/48/link.png" alt="link" /> </span>
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Mobile App Development
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            Web App Development
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Mobile Games Development
                                        </p>
                                        <p className="smalltxsize text-white font ">
                                            Web Design
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            Digital Marketing
                                        </p>
                                        <p className="smalltxsize text-white font">
                                            Hybrid Mobile App Development
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='item-center mt-12 lg:px-12 md:px-8'>
                        <div >
                            <p className="font smalltxsize  text-white text-center">
                                Copyright© 2023 Web Nauticals. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Footer
