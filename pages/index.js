import Head from 'next/head'

import { loadStripe } from '@stripe/stripe-js'

import { PageTitle } from './../components/PageTitle'
import ProductCard from '../components/ProductCard/ProductCard'
import { pane } from "./../styles/home.module.scss"


// SSG static site generation

export default function Home(props) {

    const products = props.products

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>StoreFront</title>
            </Head>
            <PageTitle tagline="Product Specials" title="storefront" />
            <main className={pane}>
                {products.map(product => <ProductCard product={product} key={product.uid} />)}
            </main>
        </>
    )
}

// getStaticProps ====> server Node.js

export async function getStaticProps() {
    // node.js code ... web apis filesystem read writes fetch
    // next.js five top level fetch api...
    const res = await fetch('https://happydog-c44c0-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json()
    const products = Object.values(productData)
    return {
        props: {
            products
        },
        revalidate: 60
    }
}
