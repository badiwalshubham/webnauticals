"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import wordpresslogo from "../../public/wordpresslogo.png"
import Dropdown1 from "../../src/components/dropdowns/Dropdown1"
import Dropdown2 from "../../src/components/dropdowns/Dropdown2"
import Dropdown3 from "../../src/components/dropdowns/Dropdown3"
import { ArrowRightIcon } from '@heroicons/react/24/solid'


const Feature = () => {
    return (
        <section className="overflow-hidden">
            <div className="px-6 py-24  z-index:9 text-center md:px-12  lg:text-left">
                <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid item-center gap-2 lg:grid-cols-2">
                        <div>
                            <div className="relative lg:ml-9 item-left grid grid-rows-1 gap-0 lg:px-12 md:px-8">
                                <div className='mb-7'>
                                    <h1
                                        className="text-3xl font-bold tracking-tight md:text-6xl xl:text-2xl">
                                        Gravitate Towards Unparalleled WordPress Excellence
                                    </h1>
                                </div>

                                <div className=' relative item-left grid grid-rows-6 gap-5'>


                                    <div >
                                        <p className=" font-bold text-blue-500  underline decoration-zinc-200 underline-offset-8">
                                            --- Wordpress Plugin Development
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" text-blue font-bold decoration-zinc-200 underline underline-offset-8">
                                            Wordpress CMS Development
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold  underline decoration-zinc-200 underline-offset-8">
                                            User Testing & Feedback
                                        </p>
                                    </div>
                                    <div>
                                        <p className=" font-bold  underline decoration-zinc-200 underline-offset-8">
                                            Training and Support
                                        </p>
                                    </div>
                                    <div >
                                        <p className=" font-bold  underline decoration-zinc-200 underline-offset-8">
                                            Performance Monitoring and optimization
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="item-left">
                                <div className='item-left mt-3'>
                                    <Image
                                        src={wordpresslogo}
                                        alt="Logo"
                                        width={151}
                                    ></Image>
                                    <div className='mt-5' >
                                        <div >
                                            <p className=" text-blue font-bold">
                                                Wordpress Plugin Development
                                            </p>
                                        </div>
                                        <p>
                                            Assessing the specific needs for enhanced functionality, ensuring a seamless
                                            and exclusive user experience. Trust our adept developers to deliver customized
                                            solutions, enriching your website with unparalleled features and performance.
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

export default Feature
