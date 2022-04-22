import React from 'react';
import Image from 'next/image'
import { productCard, price, name, description } from './styles.module.scss'
import { Button } from './../Button'


const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}


function ProductCard({ children, product, ...props }) {
  const { productName, productPrice, productDescription, imageUrl, uid } = { ...product }
  return (
    <aside className={productCard}>
      <header>
        <Image className='image'
          loader={myLoader}
          src={imageUrl}
          alt={productName}
          width={150}
          height={150}
          quality={100}
          layout="responsive"
        />

      </header>
      <h2 className={name}>{productName}</h2>
      <p className={price}>${productPrice}</p>
      <p className={description}>{productDescription}</p>
      <footer>
        <form action="/api/checkout" method="POST">
          <input type="hidden" name="uid" value={uid} />
          <Button type="submit">Buy Now</Button>
        </form>
      </footer>
    </aside>
  )
}

export default ProductCard