import { useState, useEffect, createContext } from "react";

const BkContext = createContext();

const BkProvider = ({ children }) => {
    return (
        <BkContext.Provider
            value={{

            }}
        >
            {children}
        </BkContext.Provider>
    )
}

export {
    BkProvider
}

export default BkContext;