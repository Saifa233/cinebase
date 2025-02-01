"use client";
import { useState, useContext, createContext} from 'react'

interface ItemContextType {
  items: any;
  setItems: (items:any) => void;
}

const ItemContext = createContext<ItemContextType | null>(null);

export const ItemProvider = ({children,initialItems} : {
  children : React.ReactNode,
  initialItems : any
  }) => {

  const [items,setItems] = useState(initialItems);
    
  return (
    <ItemContext.Provider value = {{items,setItems}}>
      {children}
    </ItemContext.Provider>
  )
}

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};