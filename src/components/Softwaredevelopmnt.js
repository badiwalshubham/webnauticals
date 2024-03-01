"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import android1 from "../../public/android1.png"
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Softwaredevelopment = () => {
    return (
        <>
            <section className="overflow-hidden">
                <div className="px-6 py-24  z-index:9 text-center md:px-12  lg:text-center">
                    <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid item-center gap-2 lg:grid-cols-2">

                            <div className="relative mt-9 item-center">
                                <Image
                                    src={android1}
                                    alt="Logo"
                                    width={661}
                                ></Image>
                            </div>
                            <div className='text-left  item-center relative lg:ml-5 item-center  lg:px-7 md:px-4'>
                                <h1
                                    className="text-3xl font-bold tracking-tight md:text-2xl xl:text-2xl">
                                    Software Development
                                </h1>
                                <br />
                                <p>
                                    Software development is regarded as the mixture of numerous activities such as
                                    offshore software development services, designing, programming, testing, bug
                                    fixing, planning and many more that facilitates maintenance and development of
                                    a software or application, So as a Software Development Company we care
                                    about it.
                                </p>
                                <br />
                                <p>
                                    This seems to be a simple but important process in enhancing and augmenting
                                    globalization and hence transforming your lifestyle. For tech-savvy people
                                    needs, software development is assisting business to attain the utmost height of
                                    success among other competitors. Our software design company  provides a
                                    good result for the customers at an affordable price rate with complete web
                                    solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-11 py-24  z-index:9 text-center md:px-12  lg:text-center">
                    <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className=" rounded-lg  backgroundsec2  item-center grid gap-2 lg:grid-cols-2 lg:ml-9 lg:px-12 md:px-8">
                            <div className=' text-left item-left py-8'>
                                <p className='text-white'>
                                    Ready to start your dream project?
                                </p>
                                <h1
                                    className="text-3xl text-white font-semibold tracking-tight md:text-2xl xl:text-2xl">
                                    We have a TEAM to get you there.
                                </h1>
                            </div >
                            <div className=' lg:ml-9  text-right item-right lg:px-12 py-10'>
                                <button type="button" class="text-black -mr-10  bg-slate-50 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:text-black dark:hover:text-black dark:focus:ring-blue-800">
                                    <span className='flex' >Get in Touch <ArrowRightIcon className="-mr-1 ml-2 h-5 w-5 text-black" aria-hidden="true" /> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Softwaredevelopment