import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BkContext = createContext();

const BkProvider = ({ children }) => {

    // States productos
    const [croissants, setCroissants] = useState([]);
    const [muffins, setMuffins] = useState([]);
    const [chapin, setChapin] = useState([]);
    const [panqueques, setPanqueques] = useState([]);
    const [extras, setExtras] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    //State para categorias
    const [categorias, setCategorias] = useState([]);

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

    const obtenerExtras = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=extras');
        setExtras(data);
    }

    useEffect(() => {
        obtenerExtras();
    }, [])

    const obtenerBebidas = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=bebidas');
        setBebidas(data);
    }

    useEffect(() => {
        obtenerBebidas();
    }, [])


    // Funciones Categorias
    const obtenerCategorias = async () => {
        const { data } = await axios('http://localhost:4000/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return (
        <BkContext.Provider
            value={{
                croissants,
                muffins,
                chapin,
                panqueques,
                extras,
                bebidas,
                categorias
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