import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Ninos() {

    const { ninos } = useBk();

    return (
        <Layout
            pagina="Niños"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {ninos?.map(nino => (
                    <Producto
                        key={nino.producto.id}
                        datos={nino.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}