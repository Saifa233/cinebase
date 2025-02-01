"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { ToggleTheme } from './ToggleTheme'

const Hero = ({ result } : {result : any}) => {
  return (
    <div className="grid grid-cols-7">
        <Sidebar />
        <Content result={result}/>
    </div>
  )
}
const Sidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true)
    return (
        <>
        {sideBarOpen ? (
        <div className="col-span-1 h-screen bg-grey transition-all duration-300 ease-in-out">
            <button onClick={() => setSideBarOpen(!sideBarOpen)}>
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className="flex flex-col items-center space-y-8 mt-10">
                <a className="text-2xl text-slate-400 hover:text-greyText p-4 rounded-lg">TV Series</a>
                <a className="text-2xl text-slate-400 hover:text-greyText p-4 rounded-lg">Movies</a>
                <a className="text-2xl text-slate-400 hover:text-greyText p-4 rounded-lg">Genres</a>
            </div>
        </div>
        ) : (
            <div className="fixed left-0 top-0">
                <button onClick={() => setSideBarOpen(!sideBarOpen)}>
                    <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        )
    }
    </>
    )}
        
        
const Content = ({ result } : {result : any}) => {
    const [listingView, setListingView] = useState(true)
    return (
        <div className="col-span-6 h-screen bg-whiteBg">
            {/* Nav bar */}
            <nav className="flex justify-between items-end mt-10"> 
                <h1 className="text-slate-600 text-2xl ml-12">Discover</h1>
                <div className="flex gap-8 mr-12">
                    <div className="cursor-pointer">
                        <svg className="text-slate-300 hover:text-slate-400 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <svg className="text-slate-300 hover:text-slate-400 w-7"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    </div>

                    <div className="cursor-pointer">
                        <svg className="text-slate-300 hover:text-slate-400 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>

                    <div className="cursor-pointer">
                        <svg className="text-slate-300 hover:text-slate-400 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
            </nav>
            
            {/* Show Titles */}
            <section className="image-grid md:px-4 ml-8 mr-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
                    {result.map((row : any, index : any) => (
                    <Link href={`/${row.id}`} key={row.id} prefetch={true}>
                        <div 
                            key = {row.id}
                            className="rounded-lg overflow-clip group cursor-pointer aspect-[2/3] transition-transform duration-300 hover:scale-105 translate-y-12">
                            <Image
                                priority={true}
                                quality={10}
                                src = {row.image}
                                alt = {row.title}
                                width={800}
                                height = {800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
        </div>
    )
} 

// const Content = ({ result } : {result : any}) => {
//     const [listingView, setListingView] = useState(true)
//     return (
//         <div className="col-span-5 h-screen">
//             <div className="flex justify-between ml-40 mt-4">
//                 {/* Search Box */}
//                 <div className="flex">
//                     <span className="cursor-pointer rounded-full border border-gray-400 p-2">
//                         <svg className="text-slate-400 w-8 bg-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                         </svg>
//                     </span>
//                     <input className="px-12 py-2 rounded-lg" type="text" placeholder='Enter your query'></input>
//                 </div>
                
//                 <div className="flex">
//                     {/* List/Grid */}
//                     <div className="flex border border-white/20 p-2 rounded-lg gap-2 mr-8">
//                         <button 
//                             onClick = {() => setListingView(true)}
//                             className={`${
//                             listingView ? "bg-slate-300 text-slate-600" : "text-black"
//                             } rounded-lg px-2 transition-colors cursor-pointer`}
//                         >LIST</button>
//                         <button 
//                             onClick = {() => setListingView(false)}
//                             className={`${
//                             !listingView ? "bg-slate-300 text-slate-600" : "text-black"
//                             } rounded-lg px-2 transition-colors cursor-pointer`}
//                         >GRID</button>
//                     </div>
//                     {/* Dark Mode Toggle */}
//                     <ToggleTheme />
//                 </div>
//             </div>
            
//             {/* Show Titles */}
//             <section className="image-grid md:px-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ml-40">
//                     {result.map((row : any, index : any) => (
//                     <Link href={`/${row.id}`} key={row.id} prefetch={true}>
//                       <div 
//                           key = {row.id}
//                           className="overflow-clip group cursor-pointer aspect-[2/3] transition-transform duration-300 hover:scale-105 translate-y-8">
//                           <Image
//                               priority={true}
//                               quality={10}
//                               src = {row.image}
//                               alt = {row.title}
//                               width={300}
//                               height = {400}
//                           />
//                       </div>
//                     </Link>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     )
// } 
export default Hero