import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Extras() {

    const { extras } = useBk();

    return (
        <Layout
            pagina="Extras"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {extras?.map(ext => (
                    <Producto
                        key={ext.producto.id}
                        datos={ext.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}