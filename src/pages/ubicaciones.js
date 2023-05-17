import Image from "next/image"
import Layout from "@/layout/Layout"
import useBk from "../../hooks/useBk"

export default function ubicaciones() {
    return (
        <Layout
            pagina="Ubicaciones"
        >
            <div className="bg-white w-max flex flex-col items-center gap-5 rounded-md shadow-md mt-20 p-5">
                <Image
                    width={100}
                    height={100}
                    src={'/assets/images/bk-logo.png'}
                    alt="logotipo BK"
                />
                <div className="space-y-2">
                    <p className="text-grisOscuro font-bold text-sm"><span className="text-amarillo text-base">Dirección:</span>{' '}cdad. de Guatemala</p>
                    <div>
                        <p className="text-amarillo">Horarios:</p>
                        <ul className="ml-5 text-sm">
                            <li>Viernes: <span>12:00</span> - <span>23:00</span></li>
                        </ul>
                    </div>
                    <p className="text-sm"><span className="text-amarillo text-base">Teléfono:</span>{' '}0000-0000</p>
                </div>
            </div>
        </Layout>
    )
}
