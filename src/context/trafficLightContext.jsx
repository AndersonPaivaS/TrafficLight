import { createContext } from "react"

export const trafficLightContext = createContext({})

export function TrafficLightProvider( {children} ) {


    return(
        <trafficLightContext.Provider value={{  }}>
            {children}
        </trafficLightContext.Provider>
    )
}