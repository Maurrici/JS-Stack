function MyApp({ Component, pageProps }) {
    return (
        <>
            <h1>Texto default</h1>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;