"use client"

import React from 'react'
import "./Components.css"



const Keyhighlight = () => {
    return (   
        <section className="backgroundsec1 overflow-hidden">
            <div className="px-6 py-12  z-index:9 text-center md:px-12  lg:text-center">
                <div className="w-100 mx-auto  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid item-center gap-3 grid-rows-1 mb-4">

                        <div className="relative mb-6  item-center ">
                            <div className='mb-2'>
                                <h1
                                    className="text-3xl font-bold tracking-tight md:text-2xl xl:text-2xl">
                                    Key Highlights Our Work in Numbers.
                                </h1>
                            </div>

                        </div>

                        <div>
                            <div class="grid grid-cols-3 gap-4">
                                <div className='text-center item-center'>
                                    <h1
                                        className="text-3xl text-blue-500  font-bold tracking-tight md:text-2xl xl:text-4xl">
                                        254+
                                    </h1>
                                    <p>
                                        Projectes Completed
                                    </p>
                                </div>
                                <div  className='text-center item-center'>
                                    <h1
                                        className="text-3xl text-blue-500 font-bold tracking-tight md:text-2xl xl:text-4xl">
                                        542+
                                    </h1>
                                    <p>
                                       Team Memebers
                                    </p>
                                </div>
                                <div  className='text-center item-center'>
                                    <h1
                                        className="text-3xl text-blue-500 font-bold tracking-tight md:text-2xl xl:text-4xl">
                                        960+
                                    </h1>
                                    <p>
                                       Happy Clients
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

export default Keyhighlight