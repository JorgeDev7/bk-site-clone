import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Croissants() {

    const { croissants } = useBk();

    return (
        <Layout
            pagina="Croissants"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {croissants?.map(cro => (
                    <Producto
                        key={cro.producto.id}
                        datos={cro.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}