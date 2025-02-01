"use client";
import { useState,useEffect } from 'react';
import { Github, LayoutList } from "lucide-react";
import { useDebounce } from 'use-debounce';
import { searchTitlesAction } from '@/actions/actions';
import { useItemContext } from '../components/ItemContext';
import { useViewContext } from '../components/ViewContext';

export const NavBar = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const { listingView, setListingView } = useViewContext();
  const { items, setItems } = useItemContext();

  const handleSearch = async(e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    const search = async () => {
      if (value) {
        const result = await searchTitlesAction(value);
        setItems(result); 
      }
    }
    search();
  }, [value,setItems]);

  return (
    <nav className="flex justify-between items-center backdrop-blur-sm bg-white/10 p-4 border border-white/10 my-12 max-w-7xl rounded-2xl fixed top-0 left-4 right-4 sm:left-8 sm:right-8 mx-auto z-10 shadow-lg">
      <div className="text-2xl font-bold tracking-tighter text-white">
        IMDC
      </div>
      <div className="hidden p-2 md:flex items-center gap-4">
        <div className="flex border border-white/20 p-2 rounded-lg gap-2">
          <button 
            onClick = {() => setListingView(true)}
            className={`${
              listingView ? "bg-white text-black" : "text-white"
            } rounded-lg px-2 transition-colors cursor-pointer`}
          >LIST</button>
          <button 
            onClick = {() => setListingView(false)}
            className={`${
              !listingView ? "bg-white text-black" : "text-white"
            } rounded-lg px-2 transition-colors cursor-pointer`}
          >GRID</button>
        </div>
        <p className = "text-white">SEARCH |</p>
        <input 
          className="bg-transparent border-none outline-none text-white"
          type = "text"
          onChange={handleSearch} 
          placeholder="Enter your query"
        ></input>
      </div>
      <div className="flex gap-2">
        <a href = "https:www.google.com/" target="_blank">
          <Github className="hidden md-block cursor-pointer hover:opacity-80 transition-opacity"/>
        </a>
        
        <input
          onChange={handleSearch}
          type="text"
          className="md:hidden bg-transparent place-content-end w-32 outline-none placeholder-white/25"
          placeholder="Enter your query"
        />
        <button
          className="md:hidden"
          onClick={() => setListingView(!listingView)}
        >
          <LayoutList className="cursor-pointer hover:opacity-80 transition-opacity" />
        </button>
      </div>
    </nav>
  )
}