import { useState } from 'react'
import { PageTitle } from './../components/PageTitle'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import { User } from '../components/User'

// CRA version of data loading

export default function Home() {

    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function loadExternalDataTheCRAWay() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await res.json()
            setUserData(data)
        }
        loadExternalDataTheCRAWay()
    }, [])


    return (
        <>
            <PageTitle title="StoreFront" tagline="featured products" />
            <div style={{ textAlign: "center" }}>
                <Button
                    style={{ margin: "2rem 0 0" }}
                    onClick={() => setIsLoading(!isLoading)}
                >Get some data
                </Button>
                {
                    isLoading && <p style={{ padding: "1rem" }}>This is my output</p>
                }
            </div>
            <main>
                {
                    userData.map(({ id, name, email, username }) => <User key={id} name={name} email={email} username={username} />)
                }
            </main>

        </>
    )
}

