import useBk from '../../hooks/useBk'

export default function Item2() {

    const { bebidas } = useBk();

    return (
        <div className="carousel-item flex gap-8">
            {bebidas?.map(beb => (
                <img
                    src={`/assets/images/${beb.producto.categoria}/${beb.producto.imagen}.webp`}
                    className="w-80"
                    alt={`imagen producto ${beb.producto.nombre}`} />
            ))}
        </div>
    )

}
