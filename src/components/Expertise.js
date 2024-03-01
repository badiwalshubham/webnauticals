"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import wordpresslogo from "../../public/wordpresslogo.png"
import { AcademicCapIcon } from '@heroicons/react/24/solid'


const Expertise = () => {
    return (
        <section className="overflow-hidden">
            <div className="px-6 py-12  z-index:9 text-center md:px-12  lg:text-left">
                <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="lg:ml-9 item-left lg:px-12 md:px-8">
                        <div className='mb-7'>
                            <p className='text-black'>
                                Expertise
                            </p>
                            <h1
                                className="text-3xl font-bold tracking-tight md:text-2xl xl:text-2xl">
                                Industries We Serve
                            </h1>
                        </div>
                    </div>
                    <div className="grid mt-3 item-left text-left gap-6 lg:grid-cols-4 lg:px-12 md:px-8 lg:ml-9">
                        <div className='smallcards p-7'>
                            <span> <img width="70" height="80" className=' -mt-4 mb-2 text-black ' src="https://img.icons8.com/dotty/80/education.png" alt="education"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Education
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="50" className=' -mt-4 mb-6 text-black ' src="https://img.icons8.com/ios/50/kawaii-pizza.png" alt="kawaii-pizza"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                               Food
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="80" className=' -mt-3 mb-5 text-black '  src="https://img.icons8.com/ios/50/trust--v1.png" alt="trust--v1"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Health
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="50"  className=' -mt-3 mb-4 text-black '  src="https://img.icons8.com/ios/50/ranners-crossing-finish-line.png" alt="ranners-crossing-finish-line"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Sports
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="grid mt-6 item-left text-left gap-6 lg:grid-cols-4 lg:px-12 md:px-8 lg:ml-9">
                        <div className='smallcards p-7'>
                            <span> <img width="70" height="80" className=' -mt-4 mb-2 text-black ' src="https://img.icons8.com/dotty/80/education.png" alt="education"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Education
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="50" className=' -mt-4 mb-6 text-black ' src="https://img.icons8.com/ios/50/kawaii-pizza.png" alt="kawaii-pizza"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                               Food
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="80" className=' -mt-3 mb-5 text-black '  src="https://img.icons8.com/ios/50/trust--v1.png" alt="trust--v1"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Health
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                        <div className='smallcards p-7'>
                            <span> <img width="50" height="50"  className=' -mt-3 mb-4 text-black '  src="https://img.icons8.com/ios/50/ranners-crossing-finish-line.png" alt="ranners-crossing-finish-line"/> </span>
                            <h1
                                className="text-2xl font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                Sports
                            </h1>
                            <p className='text-black mt-3'>
                                Find out how we're helping future-proof safety and security.
                            </p>
                            <p className='text-black mt-6'>
                                Read More
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Expertise
