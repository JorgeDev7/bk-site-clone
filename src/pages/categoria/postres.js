import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Postres() {

    const { postres } = useBk();

    return (
        <Layout
            pagina="Postres"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {postres?.map(post => (
                    <Producto
                        key={post.producto.id}
                        datos={post.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}