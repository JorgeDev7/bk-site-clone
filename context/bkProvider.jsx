import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BkContext = createContext();

const BkProvider = ({ children }) => {

    const [croissants, setCroissants] = useState([]);
    const [muffins, setMuffins] = useState([]);

    const obtenerCroissant = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=croissants');
        setCroissants(data);
    }

    useEffect(() => {
        obtenerCroissant();
    }, [])

    const obtenerMuffin = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=muffins');
        setMuffins(data);
    }

    useEffect(() => {
        obtenerMuffin();
    }, [])

    return (
        <BkContext.Provider
            value={{
                croissants,
                muffins,
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