import { useState, useEffect } from "react"
import Layout from "@/layout/Layout"
import axios from "axios"

export default function Croissants() {

    const [croissants, setCroissants] = useState([]);

    const obtenerCroissant = async () => {
        const { data } = await axios('http://localhost:4000/productos?producto.categoria=croissants');

        setCroissants(data);
    }

    useEffect(() => {
        obtenerCroissant();
    }, [])


    return (
        <Layout
            pagina="Croissants"
        >
            <h1>Croissants</h1>
        </Layout>
    )
}