import React from 'react';
import { FC, ReactElement } from 'react'
import Sad from '../../Assets/Images/Sad';
import Angry from '../../Assets/Images/Angry';
import Inlove from '../../Assets/Images/Inlove';
import Laugh from '../../Assets/Images/Laugh';
import Smile from '../../Assets/Images/Smile';
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';

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
      </HomepageTextContainer>
      <EmojisContainer>
        <Link to={`/foryou/angry`}>
          <Angry />
        </Link>
        <Link to={`/foryou/sad`}>
          <Sad />
        </Link>
        <Link to={`/foryou/love`}>
          <Inlove />
        </Link>
        <Link to={`/foryou/happy`}>
          <Smile />
        </Link>
        <Link to={`/foryou/veryhappy`}>
          <Laugh />
        </Link>
      </EmojisContainer>
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
