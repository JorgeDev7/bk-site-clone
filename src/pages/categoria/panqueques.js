import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Croissants() {

    const { panqueques } = useBk();

    return (
        <Layout
            pagina="Panqueques"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {panqueques?.map(pan => (
                    <Producto
                        key={pan.producto.id}
                        datos={pan.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}