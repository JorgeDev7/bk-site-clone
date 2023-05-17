import Image from "next/image"
import Layout from "@/layout/Layout"
import useBk from "../../hooks/useBk"

export default function ubicaciones() {
    return (
        <Layout
            pagina="Ubicaciones"
        >
            <div>
                <div>

                </div>
                <div>
                    <p><span>Direccion:</span>{' '}cdad. de Guatemala</p>
                    <div>
                        <p>Horarios:</p>
                        <ul>
                            <li>Viernes: <span>12:00</span> - <span>23:00</span></li>
                        </ul>
                    </div>
                    <p><span>Teléfono:</span>{' '}0000-0000</p>
                </div>
            </div>
        </Layout>
    )
}
