import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout"
import Item from "@/components/Item";
import axios from "axios"

export default function croissant({ data }) {

    const { descripcion, imagen, precio, nombre, categoria } = data[0].producto;

    const router = useRouter();

    return (
        <Layout
            pagina={nombre}
        >
            <div className="mt-10">
                <button
                    type="button"
                    className="bg-white px-3 py-1 flex items-center text-amarillo cursor-pointer rounded"
                    onClick={() => router.push(`/categoria/${categoria}`)}
                ><i className='bx bx-chevron-left text-amarillo text-4xl'></i> Regresar</button>
                <div className="mt-5 flex flex-col lg:grid lg:grid-cols-2 gap-5">
                    <Image
                        width={500}
                        height={600}
                        src={`/assets/images/${categoria}/${imagen}.webp`}
                        alt={`Imagen ${nombre}`}
                        priority={true}
                        className="mx-auto"
                    />
                    <div>
                        <p className="text-marron text-justify">{descripcion}</p>

                        <div className="flex items-center justify-between my-10">
                            <div className="flex items-center rounded text-center">
                                <div className="border-s border-t border-b rounded-s border-gray-500 px-2 py-1 text-naranja text-2xl w-10 cursor-pointer"><i className='bx bx-minus' ></i></div>
                                <div className="border border-gray-500 text-grisOscuro px-2 py-1 text-2xl w-10">1</div>
                                <div className="border-e border-t border-b rounded-e border-gray-500 px-2 py-1 text-naranja text-2xl w-10 cursor-pointer"><i className='bx bx-plus' ></i></div>
                            </div>

                            <div className="bg-white p-2 rounded">
                                <p className="text-marron">Q{precio.toFixed(2)}</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className=" bg-[#0074ba] hover:bg-blue-700 transition-colors text-white py-2 px-4 w-full xl:w-auto rounded"
                        ><i className='bx bxs-shopping-bag' ></i> Agregar al carrito</button>
                    </div>
                </div>
            </div>

            <h2 className="uppercase text-marron text-xl py-10">Pensamos que te puede gustar con:</h2>

            <div className="carousel carousel-center rounded-box">
                <Item />
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