import React from 'react';
import { FC, ReactElement } from 'react'
import Sad from '../../Assets/Images/Sad';
import Angry from '../../Assets/Images/Angry';
import Inlove from '../../Assets/Images/Inlove';
import Laugh from '../../Assets/Images/Laugh';
import Smile from '../../Assets/Images/Smile';
import Reflexive from '../../Assets/Images/Reflexive';
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';

const rabeca = require('../../Assets/Images/rabeca.png');

const feelings = require('../../Assets/Images/feelings.png');

export interface HomepageProps {
}
const Homepage: FC<HomepageProps> = ({ }) => {
  return (

    <HomepageContainer>
      <ImageContainer>
        <FeelingsImage src={feelings} alt='feelings img' />
      </ImageContainer>
      <HomepageTextContainer>
        <h2> Como você está se sentindo? </h2>
        <p> Iremos recomendar o melhor texto para você, baseado nas suas respostas. </p>
        <Link to={'/authors'}> Authors </Link> <Link to={'/favorites'}> My favorites </Link>
      </HomepageTextContainer>
      <EmojisContainer>
        <Link to={`/foryou/Angry`}>
          <Angry />
        </Link>
        <Link to={`/foryou/Sad`}>
          <Sad />
        </Link>
        <Link to={`/foryou/Love`}>
          <Inlove />
        </Link>
        <Link to={`/foryou/Happy`}>
          <Smile />
        </Link>
        <Link to={`/foryou/Funny`}>
          <Laugh />
        </Link>
        <Link to={`/foryou/Reflexive`}>
          <Reflexive />
        </Link>
      </EmojisContainer>
      <FooterContainer>
        <img alt='sad' src={rabeca} />
      </FooterContainer>
    </HomepageContainer>

  );
}

export default Homepage;

const HomepageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
`

const FooterContainer = styled.footer` 
  display: flex;  
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  img {
    width: 55px;
    height: 55px;
  }
`

const ImageContainer = styled.div`
`

const FeelingsImage = styled.img`
  width: 100%
`

const HomepageTextContainer = styled.article`
  text-align: center;
`

const EmojisContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-direction: row;

  a {
    cursor: pointer;
  }
`
