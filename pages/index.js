import { useState } from 'react'
import { PageTitle } from './../components/PageTitle'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'


// SSG static site generation

export default function Home(props) {

    const products = props.products

    return (
        <>
            <PageTitle tagline="Product Specials" title="storefront" />
            <main>
                {products.map(product => <ProductCard product={product} key={product.uid} />)}
            </main>
        </>
    )
}

// getStaticProps ====> server Node.js

export async function getStaticProps() {
    // node.js code ... web apis filesystem read writes fetch
    // next.js five top level fetch api...
    const res = await fetch('https://storefront-8ed8e-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json()
    const products = Object.values(productData)
    return {
        props: {
            products
        }
    }
}
