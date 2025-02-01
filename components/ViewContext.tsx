"use client"
import React, { useState,createContext,useContext } from 'react';

interface ViewContextType {
    listingView : boolean,
    setListingView : (value:boolean) => void;
}

const ViewContext = createContext<ViewContextType | null>(null);

export const ViewProvider = ({ children } : { children : React.ReactNode }) => {
    const [listingView, setListingView] = useState(false);

    return(
        <ViewContext.Provider value = {{ listingView, setListingView }}>
            { children }
        </ViewContext.Provider>
    );
};

export const useViewContext = () => {
    const context = useContext(ViewContext);
    if (!context) {
        throw new Error("useViewContext must be used within a ViewProvider")
    };

    return context;
};