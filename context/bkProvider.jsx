import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BkContext = createContext();

const BkProvider = ({ children }) => {

    const [croissants, setCroissants] = useState([]);

    const obtenerCroissant = async () => {
        const { data } = (await axios('http://localhost:4000/productos?producto.categoria=croissants', {
            data: 'croissants'
        }));

        setCroissants(data);
    }

    useEffect(() => {
        obtenerCroissant();
    }, [])

    return (
        <BkContext.Provider
            value={{
                croissants
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