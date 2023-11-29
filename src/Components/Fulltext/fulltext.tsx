import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import styled from 'styled-components';
import { colors, fonts } from '../../Assets/tokens';
import Books from '../../Assets/Images/Books';
import Heart from '../../Assets/Images/Heart';

interface Text {
    id: number;
    title: string;
    body_text: string;
    authors: Author[];
}

interface Author {
    name: string;
    bio: string;
}

function FullText() {
    const { '*': id } = useParams();

    const [text, setText] = useState<Text | null>(null);

    async function getText() {
        try {
            const response = await fetch(`http://127.0.0.1:3003/quote/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const textData = await response.json();
            return textData;
        } catch (error) {
            console.error('Error fetching text:', error);
            return [];
        }
    }

    useEffect(() => {
        getText().then((textData) => {
            setText(textData);
        });
    }, []);

    const [heartState, setHeartState] = useState<{ [key: string]: boolean }>(
        text ? { [text.id.toString()]: false } : {}
    );

    const handleHeartClick = () => {
        if (text) {
            setHeartState((prevState) => ({
                ...prevState,
                [text.id.toString()]: !prevState[text.id.toString()],
            }));
        }
    };


    return (
        <FullTextContainer>
            <Header></Header>
            <TextContainer>
                <Article>
                    <h1>{text?.title}</h1>
                    <p>{text?.body_text}</p>
                    <ArticleAuthor> {text?.authors[0].name} </ArticleAuthor>
                </Article>
                <IconContainer>
                    <Heart onClick={handleHeartClick} fillHeart={text ? heartState[text.id.toString()] : false} />
                </IconContainer>
                <OtherTextsContainer>
                    <Link to="/alltexts" style={{ display: 'flex', textDecoration: 'none', flexDirection: 'column', alignItems: 'center' }}>
                        <Books />
                        <h3 style={{ color: '#000' }}>Outros textos</h3>
                    </Link>
                </OtherTextsContainer >
            </TextContainer>
        </FullTextContainer>

    )
}

export default FullText


const Article = styled.article`
    display: flex;
    flex-direction: column;
    ${colors.BackgroundColor};
    padding: 20px 24px;
    margin-bottom: 20px;
    width: 100%;

    p {
        margin-top: 20px;
        text-transform: none;
        font-size: 1.25em;
    }
`
const ArticleAuthor = styled.span`
    ${fonts.Authors};
    display: flex; 
    justify-content: center;
    margin-top: 20px;
`

const TextContainer = styled.section`
    padding-inline: 15px;
`

const FullTextContainer = styled.div`
    ${fonts.Authors};
    width: 100%;
`

const OtherTextsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-content: center;
    align-items: center;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    
    svg {
    width: 28px;
    height: 28px;
}   
`