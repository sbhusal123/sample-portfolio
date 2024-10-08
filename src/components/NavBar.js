"use client"

import { useEffect, useRef, useState } from "react";
import { NavBarToolTip } from "./NavToolTip";


export function NarBar() {
    const [show, setShow] = useState(false)
    const ref = useRef(null)

    const handleHamburgerClose = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            setShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleHamburgerClose)
        return () => {
            document.removeEventListener('click', handleHamburgerClose)
        }
    }, [])

    return (
        <nav className="relative w-full" ref={ref}>
            <NavBarToolTip/>

            <div className="flex flex-row sm:justify-around py-5 items-center bg-slate-950 sticky">
                <div className="flex flex-row items-center">
                    <div>
                        <h1 className="text-2xl ml-5 sm:ml-0 text-white">
                            <a href="" >LOGO</a>
                        </h1>
                    </div>
                </div>
                <div className="absolute right-5 sm:hidden mt-2" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                </div>
                <div className="hidden sm:block">
                    <ul className="flex flex-col sm:flex-row justify-start gap-8 text-md font-semibold text-slate-400">
                            <li className="border-b-2 hover:border-orange-500 border-slate-950 transition ease-in delay-50 cursor-pointer">
                                <a href="">Home</a>
                            </li>
                            <li className="border-b-2 border-slate-950 hover:border-orange-500 transition  ease-in delay-50 cursor-pointer">
                                <a>Services</a>
                            </li>
                            <li className="border-b-2 hover:border-orange-500 border-slate-950 transition ease-in delay-50 cursor-pointer">
                                <a href="#ourWork">Portfolio</a>
                            </li>
                            <li className="border-b-2 hover:border-orange-500 border-slate-950 transition ease-in delay-50 cursor-pointer">
                                <a>Blogs</a>
                            </li>
                    </ul>
                </div>
            </div>

                    <div className={`sm:hidden z-10 absolute top-full left-0 w-full bg-gray-800  ${show ? 'open-navbar' : 'close-navbar'}`}>
                        <ul className="flex flex-col gap-5 text-md font-semibold text-slate-500 mx-5 my-2">
                            <li className="border-b-2 hover:border-orange-500 transition ease-in delay-50 cursor-pointer border-gray-800">
                                <a>Home</a>
                            </li>
                            <li className="border-b-2 border-gray-800 hover:border-orange-500 transition ease-in delay-50 cursor-pointer">
                                <a>Services</a>
                            </li>
                            <li className="border-b-2 hover:border-orange-500 transition border-gray-800 ease-in delay-50 cursor-pointer">
                                <a>Portfolio</a>
                            </li>
                            <li className="border-b-2 hover:border-orange-500 transition border-gray-800 ease-in delay-50 cursor-pointer">
                                <a>Blogs</a>
                            </li>
                        </ul>
                    </div>
        </nav>
    )
}