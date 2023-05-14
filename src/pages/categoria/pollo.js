import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Pollo() {

    const { pollo } = useBk();

    return (
        <Layout
            pagina="Pollo"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {pollo?.map(pl => (
                    <Producto
                        key={pl.producto.id}
                        datos={pl.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}