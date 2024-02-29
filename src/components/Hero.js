"use client"

import React from 'react'
import "./Components.css"
import Image from "next/image";
import logo from "../../public/logo.png"
import Dropdown1 from "../../src/components/dropdowns/Dropdown1"
import Dropdown2 from "../../src/components/dropdowns/Dropdown2"
import Dropdown3 from "../../src/components/dropdowns/Dropdown3"
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Hero = () => {
    return (
        <section className="background-image mb-40 overflow-hidden">
            <nav
                className="fixed backdrop-filter backdrop-blur-lg bg-opacity-30 py-2 top-0 z-10 flex w-full items-center justify-between lg:flex-wrap lg:justify-start"
                data-te-navbar-ref>
                <div className="flex w-full mt-2 mb-2 flex-wrap items-center justify-between px-6">
                    <div className="flex items-center">
                        <button
                            className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="[&>svg]:w-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                                    <path fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <a className="text-primary " href="#!">
                            <span>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={171}
                                    height={115}
                                ></Image>
                            </span>
                        </a>
                    </div>

                    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY" data-te-collapse-item>

                        <ul className="ml-auto lg:flex lg:flex-row my-1 space-x-5 flex items-center lg:my-0 lg:ml-auto" data-te-navbar-nav-ref>
                            <li data-te-nav-item-ref>
                                <Dropdown1 />
                            </li>
                            <li data-te-nav-item-ref>
                                <Dropdown2 />
                            </li>
                            <li data-te-nav-item-ref>
                                <Dropdown3 />
                            </li>
                            <li data-te-nav-item-ref>
                                <a className="text-white text-sm font-semibold " href="#">WORK</a>
                            </li>
                            <li data-te-nav-item-ref>
                                <a className="text-white text-sm font-semibold" href="#">CONTACT US</a>
                            </li>

                        </ul>
                    </div>

                    <div className="my-1 pl-7  flex items-center lg:my-0 lg:ml-auto">
                        <button className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative flex gap-x-1 px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Get Free Quote <ArrowRightIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                            </span>
                        </button>
                    </div>

                </div>
            </nav>

            <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
                <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0 z-index: 10">
                            <h1
                                className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                {/* The best offer <br /><span className="text-[hsl(218,81%,75%)]">for your business</span> */}
                            </h1>
                            <p className="opacity-70 text-[hsl(218,81%,85%)]">
                                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora
                                mollitia dolorum consequatur nulla, neque debitis eos
                                reprehenderit quasi ab ipsum nisi dolorem modi. Quos? */}
                            </p>
                        </div>
                        <div className="relative mb-12 lg:mb-0">
                            <div
                                className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[51px] backdrop-saturate-[200%] block rounded-lg px-6 py-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white dark:shadow-black/20 md:px-8">

                                <form>
                                    <div class="grid md:grid-cols-2 md:gap-5 mt-5">
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput1" placeholder="First name" />
                                            <label for="exampleFormControlInput1"
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary">First
                                                name
                                            </label>
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput2" placeholder="Last name" />
                                            <label for="exampleFormControlInput2"
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary">Last
                                                name
                                            </label>
                                        </div>
                                    </div>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="email"
                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput3" placeholder="Email address" />
                                        <label for="exampleFormControlInput3"
                                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary">Email
                                            address
                                        </label>
                                    </div>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="password"
                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput4" placeholder="Password" />
                                        <label for="exampleFormControlInput4"
                                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary">Password
                                        </label>
                                    </div>
                                    <div class="mb-6 flex min-h-[1.5rem] justify-center pl-[1.5rem]">
                                        <button type="button" class="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            <span className=" flex gap-x-1 px-6">
                                                Get Free Quote <ArrowRightIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Hero