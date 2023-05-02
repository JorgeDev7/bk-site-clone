import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { Poppins, Montserrat } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
    weight: '900',
    style: 'normal',
    subsets: ['latin']
})

const montserrat = Montserrat({
    weight: '500',
    style: 'normal',
    subsets: ['latin']
})

export default function Layout({ children, pagina }) {

    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleActive = () => {
        setActive(!active);
    }

    return (
        <>
            <Head>
                <meta name="application-name" content="Burger King" />
                <title>Burger King - {pagina}</title>
                <link rel="icon" type="image/png" href="/assets/images/bk-logo.png" />
            </Head>

            <header className={`bg-white shadow-sm py-5 ${active ? 'h-[542px]' : 'h-[105px]'} transition-[height] duration-500`}>
                <div className="container px-5 mx-auto">
                    <div
                        className="flex justify-between items-center"
                        onClick={() => router.push('/')}
                    >
                        <Image
                            width={65}
                            height={65}
                            src="/assets/images/bk-logo.png"
                            alt="logo BK"
                            className="cursor-pointer"
                            priority={true}
                        />

                        <i
                            className='bx bx-menu-alt-right text-4xl cursor-pointer text-grisOscuro'
                            onClick={handleActive}
                        ></i>
                    </div>

                    <nav className={`mt-10 ${active ? 'opacity-100 pointer-events-auto delay-200' : 'opacity-0 pointer-events-none'} transition-opacity`}>
                        <ul className="space-y-3">
                            <li className="border-b pb-2">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins} font-black text-xl uppercase`}
                                    href="/menu"
                                >Menú</a>
                            </li>
                            <li className="border-b pb-2">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins} font-black text-xl uppercase`}
                                    href="/ubicaciones"
                                >Ubicaciones</a>
                            </li>
                            <li className="border-b pb-2">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins} font-black text-xl uppercase`}
                                    href="/nuevo"
                                >Lo nuevo</a>
                            </li>
                            <li className="border-b pb-2">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins} font-black text-xl uppercase`}
                                    href="/ordenes"
                                >Mis Órdenes</a>
                            </li>
                            <li className="border-b pb-2">
                                <a
                                    className={`text-[#666] lg:text-amarillo hover:text-rojo transition-colors ${poppins} font-black text-xl uppercase`}
                                    href="/direcciones"
                                >Mis direcciones</a>
                            </li>

                            <li className="border-b">
                                <i className='bx bx-search-alt text-3xl text-amarillo cursor-pointer' ></i>
                            </li>
                        </ul>
                    </nav>

                    <div className={`mt-10 ${active ? 'opacity-100 pointer-events-auto delay-200' : 'opacity-0 pointer-events-none'} transition-opacity`}>
                        <p className="text-amarillo hover:underline cursor-pointer pb-5">Ingresar/Registro</p>
                        <div className="bg-[#f9f9f9] rounded-full border border-[#ececec] relative py-1">
                            <div className="flex items-center pl-3 space-x-2">
                                <p className={`text-[#595f65] text-sm ${montserrat} font-medium hover:underline hover:text-rojo transition-colors cursor-pointer`}>0 artículos</p>
                                <p className={`text-[#595f65] text-sm border-s pl-2 ${montserrat} font-medium hover:underline hover:text-rojo transition-colors cursor-pointer`}>Q0.00</p>
                            </div>
                            <div className="absolute -top-1 right-0 bg-amarillo rounded-full p-2.5 flex items-center justify-center cursor-pointer">
                                <i className='bx bxs-shopping-bag text-white' ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}