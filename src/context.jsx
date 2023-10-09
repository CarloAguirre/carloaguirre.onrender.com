import { createContext, useContext, useState } from "react"

 const PortafolioContext = createContext({})

export const PortafolioProvider = ({ children }) =>{

    const [mainSwitch, setMainSwitch] = useState(false)
    const globalState = {
        mainSwitch,
        setMainSwitch
      }
        return (
            <PortafolioContext.Provider
              value={globalState}
            >
              {children}
            </PortafolioContext.Provider>
          );
 
 }

 export const usePortafolio = ()=> useContext(PortafolioContext)