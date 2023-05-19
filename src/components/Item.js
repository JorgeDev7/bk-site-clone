import useBk from '../../hooks/useBk'

export default function Item() {

    const { extras } = useBk();

    return (
        <div className="carousel-item flex gap-8">
            {extras?.map(extra => (
                <img
                    src={`/assets/images/${extra.producto.categoria}/${extra.producto.imagen}.webp`}
                    className="w-80"
                    alt={`imagen producto ${extra.producto.nombre}`} />
            ))}
        </div>
    )
}
