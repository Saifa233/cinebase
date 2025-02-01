"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ListGrid } from "./ListGrid";
import { useItemContext } from "./ItemContext";

export const MainView = ({ result } : {result : any}) => {
    const { items, setItems } = useItemContext();

    return <div className = "mx-auto my-80">
        <section className="image-list px-4 sm:px-0">
            <div>
                <ListGrid result = { items }/>
            </div>
        </section>
    
    </div>
}