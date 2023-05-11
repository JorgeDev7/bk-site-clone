import Image from "next/image";
import { useRouter } from "next/router";

export default function Producto({ datos }) {

    const { imagen, nombre, id, categoria } = datos;

    const router = useRouter();

    return (
        <Image
            key={datos.id}
            width={300}
            height={400}
            src={`/assets/images/${categoria}/${imagen}.webp`}
            alt={`producto ${nombre}`}
            onClick={() => router.push(`/producto/${id}`)}
            priority={true}
            className="cursor-pointer"
        />
    )
}
