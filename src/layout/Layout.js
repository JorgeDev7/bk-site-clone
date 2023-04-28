import Head from "next/head"

export default function Layout({ children, pagina }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/images/bk-logo.png" />
                <meta name="application-name" content="Burger King" />
                <title>Burger King - {pagina}</title>
            </Head>

            <header>
                {/* navegacion */}
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}