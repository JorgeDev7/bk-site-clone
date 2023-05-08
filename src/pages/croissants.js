import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout"
import useBk from "../../hooks/useBk";

export default function Croissants() {

    const { croissants } = useBk();
    const router = useRouter();

    return (
        <Layout
            pagina="Croissants"
        >
            <div className="container px-5 mx-auto grid grid-cols-4 gap-5 mt-10">
                {croissants?.map(cro => (
                    <Image
                        key={cro.producto.id}
                        width={300}
                        height={400}
                        src={`/assets/images/Croissants/${cro.producto.imagen}.jpg`}
                        alt={`imagen croissant ${cro.producto.nombre}`}
                        onClick={() => router.push(`/producto/${cro.producto.id}`)}
                    />
                ))}
            </div>
        </Layout>
    )
}