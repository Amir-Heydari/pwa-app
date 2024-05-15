import React  from 'react'

function Home() {

    let isOnline = navigator.onLine

    return (
        <div>
            <div>Home</div>

            <div>you are {isOnline ? <b>ONLINE</b> : <b>NOT ONLINE</b>}</div>
        </div>
    )
}

export default Home
