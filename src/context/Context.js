'use client'
import { createContext, useContext, useState } from 'react'


const GlobalStateContext = createContext()


export function GlobalStateProvider({ children }) {
    const [user, setUser] = useState({
        dni: '',
        usuario: '',
        clave: '',
        recordar: false,
      });
  
    return (
      <GlobalStateContext.Provider value={{ user, setUser }}>
        {children}
      </GlobalStateContext.Provider>
    );
  }


export function useGlobalState() {
    return useContext(GlobalStateContext);
}