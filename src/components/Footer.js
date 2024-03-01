"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import wordpresslogo from "../../public/wordpresslogo.png"


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
                    <div className="grid item-center gap-2 lg:grid-cols-2">
                        <div>
                            <div className="relative lg:ml-9 item-left grid grid-rows-1 gap-0 lg:px-12 md:px-8">

                                <div className=' relative item-left grid grid-rows-6 gap-5'>
                                    <div >
                                        <p className=" font-bold text-blue-500  ">
                                            --- Wordpress Plugin Development
                                        </p>
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
            </div>

        </section>

    )
}

export default Footer
