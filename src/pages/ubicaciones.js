import Layout from "@/layout/Layout"
import Ubicacion from "@/components/Ubicacion"
import useBk from "../../hooks/useBk"

export default function ubicaciones() {

    const { ubicaciones } = useBk();

    return (
        <Layout
            pagina="Ubicaciones"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {ubicaciones?.map(ubicacion => (
                    <Ubicacion
                        key={ubicacion.id}
                        datos={ubicacion}
                    />
                ))}
            </div>
        </Layout>
    )
}
