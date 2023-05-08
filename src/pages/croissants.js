import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import Layout from "@/layout/Layout"
import axios from "axios"

export default function Croissants() {

    const [croissants, setCroissants] = useState([]);

    const router = useRouter();

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
        <Layout
            pagina="Croissants"
        >
            <div className="container px-5 mx-auto grid grid-cols-4 gap-5 mt-10">
                {croissants?.map(cro => (
                    <Image
                        width={300}
                        height={400}
                        src={`/assets/images/Croissants/${cro.producto.imagen}.jpg`}
                        alt={`imagen croissant ${cro.producto.nombre}`}
                        onClick={() => router.push(`/producto/${cro.producto.id}`)}
                    />
                ))}
            </div>
        </Layout>
    )
}