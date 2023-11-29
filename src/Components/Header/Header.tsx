import React from 'react'
import Heart from '../../Assets/Images/Heart'
import styled from 'styled-components';
import { colors } from '../../Assets/tokens';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const rabeca = require('../../Assets/Images/rabeca.png');

function Header() {
    const navigate = useNavigate();

    const handleSvgClick = () => {
        navigate(-1);
    };

    return (
        <HeaderContainer>
            <svg
                onClick={handleSvgClick}
                style={{ cursor: 'pointer' }}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.325 19.7694L4.6 13.0444C4.51667 12.9778 4.45833 12.9028 4.425 12.8194C4.39167 12.7361 4.375 12.6444 4.375 12.5444C4.375 12.4444 4.39167 12.3528 4.425 12.2694C4.45833 12.1861 4.51667 12.1111 4.6 12.0444L11.35 5.29444C11.45 5.19444 11.575 5.14444 11.725 5.14444C11.875 5.14444 12 5.20277 12.1 5.31944C12.2167 5.43611 12.275 5.56944 12.275 5.71944C12.275 5.86944 12.2167 6.00277 12.1 6.11944L6.25 11.9694H18.775C18.925 11.9694 19.0542 12.0236 19.1625 12.1319C19.2708 12.2403 19.325 12.3778 19.325 12.5444C19.325 12.7111 19.2708 12.8486 19.1625 12.9569C19.0542 13.0653 18.925 13.1194 18.775 13.1194H6.25L12.125 18.9944C12.225 19.0944 12.275 19.2194 12.275 19.3694C12.275 19.5194 12.2167 19.6528 12.1 19.7694C11.9833 19.8861 11.85 19.9444 11.7 19.9444C11.55 19.9444 11.425 19.8861 11.325 19.7694Z" fill="black" />
            </svg>

            <NavContainer>
                <Link to={'/favorites'}><Heart fillHeart={true} /></Link>
                <Link to={'/'}> <img alt='rabeca' src={rabeca} /> </Link>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: row;
    border-bottom: 1px solid #EDE9E9;
    padding: 5px;
    margin-bottom: 20px;
    width: 100%;

    a {
        text-decoration: none;
    }
}
`

const NavContainer = styled.nav`
    img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 16px;
        }
    }
`