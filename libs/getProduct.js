async function getProduct(uid) {
    const res = await fetch(
        `https://storefront-8ed8e-default-rtdb.firebaseio.com/products/${uid}.json`
    );
    const product = await res.json();
    return product;
}

export { getProduct };