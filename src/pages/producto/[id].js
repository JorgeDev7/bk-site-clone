import Image from "next/image";
import Layout from "@/layout/Layout"
import axios from "axios"

export default function croissant({ data }) {

    const { descripcion, imagen, precio, nombre } = data[0].producto;

    return (
        <Layout
            pagina={nombre}
        >
            <button
                type="button"
            ><i class='bx bx-chevron-left'></i> Regresar</button>
            <div>
                <Image
                    width={400}
                    height={500}
                    src={`/assets/images/Croissants/${imagen}.jpg`}
                    alt={`Imagen ${nombre}`}
                    priority={true}
                />
                <div>
                    <p>{descripcion}</p>

                    <div>
                        <div>
                            <div><i className='bx bx-minus' ></i></div>
                            <div>1</div>
                            <div><i className='bx bx-plus' ></i></div>
                        </div>

                        <div>
                            <p>{precio}</p>
                        </div>

                        <button
                            type="button"
                        ><i className='bx bxs-shopping-bag text-white' ></i> Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </Layout>
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