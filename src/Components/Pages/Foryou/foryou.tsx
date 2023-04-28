import React from 'react'
import { FC } from 'react'
import Card from '../../Cards/Card'
import { useParams } from 'react-router-dom';

const ForYouPage = ({ }) => {
    const { id } = useParams();
    return (
        <section>
            <h1> Para você hoje:  </h1>
            <main>
                <Card feeling={id} />
            </main>
        </section>
    )
}

export default ForYouPage