import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BkContext = createContext();

const BkProvider = ({ children }) => {

    const [croissants, setCroissants] = useState([]);
    const [muffins, setMuffins] = useState([]);
    const [chapin, setChapin] = useState([]);
    const [panqueques, setPanqueques] = useState([]);

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

    const obtenerChapin = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=chapin');
        setChapin(data);
    }

    useEffect(() => {
        obtenerChapin();
    }, [])

    const obtenerPanqueques = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=panqueques');
        setPanqueques(data);
    }

    useEffect(() => {
        obtenerPanqueques();
    }, [])

    return (
        <BkContext.Provider
            value={{
                croissants,
                muffins,
                chapin,
                panqueques,
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