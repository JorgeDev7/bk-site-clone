import Layout from "@/layout/Layout"
import axios from "axios"

export default function croissant({ data }) {

    const { descripcion, imagen, precio, nombre } = data[0].producto;

    return (
        <Layout
            pagina={nombre}
        ></Layout>
    )
}


export async function getServerSideProps({ query: { id } }) {

    const { data } = await axios(`http://localhost:4000/productos?producto.id=${id}`);

    return {
        props: {
            data
        }
    }
}