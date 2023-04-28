import { FC, ReactElement } from 'react'
import styled from 'styled-components'
const rabeca = require('../../Assets/Images/rabeca.png');

export interface FooterProps {
}
const Footer: FC<FooterProps> = ({ }) => {
  return (
    <FooterContainer>
      <img alt='sad' src={rabeca} />
    </FooterContainer>
  )
}

export default Footer;

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