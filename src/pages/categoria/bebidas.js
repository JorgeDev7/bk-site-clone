import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Bebidas() {

    const { bebidas } = useBk();

    return (
        <Layout
            pagina="Chapin"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {bebidas?.map(beb => (
                    <Producto
                        key={beb.producto.id}
                        datos={beb.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}