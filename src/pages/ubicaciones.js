import Layout from "@/layout/Layout"
import Ubicacion from "@/components/Ubicacion"
import useBk from "../../hooks/useBk"

export default function ubicaciones() {
    return (
        <Layout
            pagina="Ubicaciones"
        >
            <Ubicacion />
        </Layout>
    )
}
