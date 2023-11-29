import React from 'react'
import { FC } from 'react'
import Card from '../../Cards/Card'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Header/Header';

const ForYouPage = ({ }) => {
    const { '*': id } = useParams();

    return (
        <>
            <Header></Header>
            <CardsContainer>
                <h1> Para você hoje:  </h1>
                <Main>
                    <Card feeling={id} />
                </Main>
            </CardsContainer>
        </>

    )
}

export default ForYouPage

const CardsContainer = styled.section`
    padding-inline: 14px;
`

const Main = styled.section`
    padding-top: 14px;
`

