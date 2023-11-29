import React from 'react'
import Card from '../Cards/Card'
import styled from 'styled-components'
import Header from '../Header/Header'

function Alltexts() {
    return (
        <>
            <Header></Header>
            <ListContainer>
                <h1>Nossa coletânea: </h1>
                <Main>
                    <Card />
                </Main>
            </ListContainer>

        </>

    )
}

export default Alltexts

const Main = styled.div`
    padding-top: 14px;
`

const ListContainer = styled.section`
    padding-inline: 15px;
`