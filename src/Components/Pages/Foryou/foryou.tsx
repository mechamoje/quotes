import React from 'react'
import { FC } from 'react'
import Card from '../../Cards/Card'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ForYouPage = ({ }) => {
    const { '*': id } = useParams();

    return (
        <section>
            <h1> Para você hoje:  </h1>
            <Main>
                <Card feeling={id} />
            </Main>
        </section>
    )
}

export default ForYouPage

const Main = styled.main`
    padding-top: 14px;
`