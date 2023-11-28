
import { FC, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Texts } from '../../Assets/Texts/texts'
import { colors, fonts } from '../../Assets/tokens';
import Heart from '../../Assets/Images/Heart'
import Eye from '../../Assets/Images/Eye'
import React from 'react';
import { get } from 'http';


interface CardProps {
    feeling?: string;
    showEye?: boolean;
    fillHeart?: boolean;
    Author?: string;
    showAuthor?: boolean;
    Title?: string;
    TitlePosition?: 'top' | 'aside';
    content?: string;
    showFullText?: boolean;
}

const Card: FC<CardProps> = ({
    content,
    feeling,
    fillHeart = false,
    Author,
    showAuthor = false,
    Title,
    showEye = false,
    TitlePosition = 'aside',
    showFullText = false
}) => {

    const [quotes, setQuotes] = useState<any[]>([]);

    async function getQuotes() {
        try {
            const response = await fetch('http://127.0.0.1:3003/quotes/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const quotesData = await response.json();
            return quotesData;
        } catch (error) {
            console.error('Error fetching quotes:', error);
            return [];
        }
    }

    useEffect(() => {
        getQuotes().then((quotesData) => {
            setQuotes(quotesData);
        });
    }, []);
    const filteredQuotes = feeling ? quotes.filter(text => text.feeling === feeling) : quotes;

    const [heartStates, setHeartStates] = useState<{ [key: string]: boolean }>(
        quotes.reduce((obj, text) => ({ ...obj, [text.id]: false }), {})

    );

    const handleHeartClick = (text: any) => {
        setHeartStates((prevState) => ({
            ...prevState,
            [text.id]: !prevState[text.id]
        }));
    };

    return (
        <>
            {
                filteredQuotes.map((quote) => (
                    <React.Fragment key={quote.id}>
                        <Article>
                            <ArticleTopTitle TitlePosition={TitlePosition}> {quote.title} </ArticleTopTitle>
                            <ArticleContent>
                                {showFullText ? quote.body_text : quote.body_text.slice(0, 200) + '...'}
                            </ArticleContent>
                            <ArticleAuthor showAuthor={showAuthor}> {quote.author} </ArticleAuthor>
                        </Article>
                        <ButtonsContainer TitlePosition={TitlePosition} className="icon">
                            <ArticleBottomTitle TitlePosition={TitlePosition}> {quote.title} </ArticleBottomTitle>
                            <IconContainer>
                                <Heart onClick={() => handleHeartClick(quote)} fillHeart={heartStates[quote.id]} />
                                <Link to={`/text/${quote.id}`}>
                                    <Eye />
                                </Link>
                            </IconContainer>
                        </ButtonsContainer>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default Card;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    ${colors.BackgroundColor};
    padding: 20px 24px;
    margin-bottom: 20px;
`

const ArticleTopTitle = styled.h3<{
    TitlePosition: 'top' | 'aside';
}>`
    margin-bottom: 14px;
    ${fonts.BigCardandPageTitle};
    ${props => props.TitlePosition === 'top' ? `display: flex; justify-content: left;` : `display: none;`}
`

const ArticleBottomTitle = styled.h3<{
    TitlePosition: 'top' | 'aside';
}>`
    ${fonts.SmallCardTitle};
    ${props => props.TitlePosition === 'aside' ? `display: flex; justify-content: left;` : `display: none;`}
`

const ArticleContent = styled.p`
    margin-bottom: 16px;
    ${fonts.Content};
`
const ArticleAuthor = styled.span<{
    showAuthor: boolean;
}>`
    ${fonts.Authors};
    ${props => props.showAuthor ? 'display: flex; justify-content: center;' : 'display: none;'}
`

const ButtonsContainer = styled.span<{
    TitlePosition: 'top' | 'aside';
}>`
    ${fonts.Authors};
    display: flex;
    margin-bottom: 40px;
    padding-left: 4px;
    ${props => props.TitlePosition === 'aside' ? 'justify-content: space-between;' : 'justify-content: flex-end;'}

`

const IconContainer = styled.span`
    display: flex;
    gap: 0.8em;
    
    svg {
    width: 28px;
    height: 28px;
}   
`


