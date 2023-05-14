import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Otros() {

    const { otros } = useBk();

    return (
        <Layout
            pagina="Otros"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {otros?.map(ot => (
                    <Producto
                        key={ot.producto.id}
                        datos={ot.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}