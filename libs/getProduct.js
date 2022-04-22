async function getProduct(uid) {
    const res = await fetch(
        `https://happydog-c44c0-default-rtdb.firebaseio.com/products/${uid}.json`
    );
    const product = await res.json();
    return product;
}

export { getProduct };