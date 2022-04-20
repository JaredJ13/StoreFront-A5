import { PageTitle } from './../components/PageTitle'

export default function Home() {

    productData.map(item => console.log(item))


    return (
        <>
            <PageTitle title="StoreFront" tagline="featured products" />
            <ul>
                {productData.map(product => <ListItem key={product} number={product} />)}
            </ul>
        </>
    )
}

function ListItem({ number, key, props }) {
    return <li>{number} <span>{key}</span></li>
}
