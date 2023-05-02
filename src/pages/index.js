import Image from 'next/image'
import { Roboto, Montserrat, Dancing_Script } from 'next/font/google'
import Layout from '@/layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function Home() {

  return (
    <Layout
      pagina="Home"
    >
      <h1 className={`text-amarillo ${montserrat} font-black text-5xl md:text-7xl lg:text-8xl uppercase text-end mt-5`}>Es hora del <span className='text-rojo block'>desayuno</span></h1>
      <Image
        width={750}
        height={850}
        src="/assets/images/bk-desayuno.png"
        alt="logo BK"
        className='mx-auto -mt-5 lg:-mt-20'
        priority={true}
      />

      <div className='border-y-2 border-y-grisOscuro border-dashed px-10 w-max mx-auto'>
        <h2 className={`${dancingScript.variable} font-medium text-grisOscuro `}>Ordena a domicilio de</h2>
        <p>7:00 am a 22:00 pm</p>
      </div>
    </Layout>
  )
}
