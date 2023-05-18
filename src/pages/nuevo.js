import Layout from "@/layout/Layout"
import Image from "next/image"
import Link from "next/link"

export default function nuevo() {
    return (
        <Layout
            pagina="Lo Nuevo"
        >
            <div className="grid lg:grid-cols-2 gap-12 mt-20">
                <div>
                    <Image
                        height={700}
                        width={700}
                        alt='lo nuevo'
                        src="/assets/images/lo-nuevo/nuevo.webp"
                        className="rounded-box mx-auto max-md:w-full h-full object-cover"
                        loading='eager'
                    />
                </div>
                <div>
                    <Link
                        href="/producto/1"
                    >
                        <Image
                            height={700}
                            width={700}
                            alt='plato con croassint tortilla, frijoles, platano frito, huevos con salsa y jamon'
                            src="/assets/images/lo-nuevo/bk_chapin_jamon.webp"
                            className="rounded-box mx-auto max-md:w-full h-full"
                            loading='eager'
                        />
                    </Link>
                </div>
                <div>
                    <Link
                        href="/producto/14"
                    >
                        <Image
                            height={700}
                            width={700}
                            alt='porcion de panqueques con salchica'
                            src="/assets/images/lo-nuevo/panqueques_salchicha.webp"
                            className="rounded-box mx-auto max-md:w-full h-full object-cover"
                            loading='eager'
                        />
                    </Link>
                </div>

                <div>
                    <Link
                        href="/producto/38"
                    >
                        <Image
                            height={700}
                            width={700}
                            alt='hershey pie'
                            src="/assets/images/lo-nuevo/hersheys_pie.webp"
                            className="rounded-box mx-auto max-md:w-full h-full object-cover"
                            loading='eager'
                        />
                    </Link>
                </div>

                <div>
                    <Link
                        href="/producto/42"
                    >
                        <Image
                            height={700}
                            width={700}
                            alt='porcion tostadas a la francesa'
                            src="/assets/images/lo-nuevo/tostadas_francesas.webp"
                            className="rounded-box mx-auto max-md:w-full h-full object-cover"
                            loading='eager'
                        />
                    </Link>
                </div>

                <div>
                    <Link
                        href="/producto/39"
                    >
                        <Image
                            height={700}
                            width={700}
                            alt='shake oreo'
                            src="/assets/images/lo-nuevo/shake_oreo.webp"
                            className="rounded-box mx-auto max-md:w-full h-full object-cover"
                            loading='eager'
                        />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
