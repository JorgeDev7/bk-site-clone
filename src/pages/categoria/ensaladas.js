import Layout from "@/layout/Layout"
import Producto from "@/components/Producto";
import useBk from "../../../hooks/useBk";

export default function Ensaladas() {

    const { ensaladas } = useBk();

    return (
        <Layout
            pagina="Ensaladas"
        >
            <div className="container px-5 mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {ensaladas?.map(end => (
                    <Producto
                        key={end.producto.id}
                        datos={end.producto}
                    />
                ))}
            </div>
        </Layout>
    )
}