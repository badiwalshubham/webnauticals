"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import logo from "../../public/logo.webp"


const Footer = () => {
    return (
        <section className="overflow-hidden mt-11 footerbg">
            <div className="px-6 py-12 z-index:9 text-center md:px-12  lg:text-left">
                <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className='mb-7'>
                        <h1
                            className="text-3xl text-center font-bold tracking-tight md:text-2xl xl:text-2xl">
                            Gravitate Towards Unparalleled WordPress Excellence
                        </h1>
                    </div>


                    <div className="grid  lg:grid-cols-2">
                        <div>
                            <div className=" lg:ml-9 text-center grid grid-rows-1 gap-3 lg:px-12 md:px-8">
                                <div >
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
                                    <p className="font text-white text-left">
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
                            </div>
                        </div>
                        <div>
                            <div className=" lg:ml-9 item-left grid grid-rows-1 gap-3 lg:px-12 md:px-8">
                                <div >
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={171}
                                        height={115}
                                    ></Image>
                                </div>
                                <div >
                                    <p className=" text-blue font-bold ">
                                        Wordpress CMS Development
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold ">
                                        User Testing & Feedback
                                    </p>
                                </div>
                                <div>
                                    <p className=" font-bold">
                                        Training and Support
                                    </p>
                                </div>
                                <div >
                                    <p className=" font-bold">
                                        Performance Monitoring and optimization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Footer
