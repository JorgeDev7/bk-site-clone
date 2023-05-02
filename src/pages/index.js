import Image from 'next/image'
import { Roboto, Caveat, Montserrat } from 'next/font/google'
import Layout from '@/layout/Layout';

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const caveat = Caveat({
  weight: '500',
  style: 'normal',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: '900',
  style: 'normal',
  subsets: ['latin']
})

export default function Home() {

  return (
    <Layout
      pagina="Home"
    >
      <h1 className='text-amarillo'>Es hora del <span>desayuno</span></h1>
      <Image
        width={600}
        height={700}
        src="/assets/images/bk-desayuno.png"
        alt="logo BK"
        priority={true}
      />

      <div>
        <h2>Ordena a domicilio de</h2>
        <p>7:00 am a 22:00 pm</p>
      </div>
    </Layout>
  )
}
