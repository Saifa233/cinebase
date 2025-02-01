"use client"
import { useState,useEffect } from "react";

export const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme == "dark");
    },[])
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    return (
        <button onClick={toggleTheme} className="rounded-full border border-gray-400 p-2 mr-40">
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}