import Image from "next/image";
import { useRouter } from "next/router";

export default function Producto({ datos }) {

    const { imagen, nombre, id } = datos;

    const router = useRouter();

    return (
        <Image
            key={datos.id}
            width={300}
            height={400}
            src={`/assets/images/Croissants/${imagen}.jpg`}
            alt={`imagen croissant ${nombre}`}
            onClick={() => router.push(`/producto/${id}`)}
            priority={true}
            className="cursor-pointer"
        />
    )
}
