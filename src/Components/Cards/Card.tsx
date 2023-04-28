
import { FC, useState } from 'react'
import styled from 'styled-components'
import { Texts } from '../../Assets/Texts/texts'
import { colors, fonts } from '../../Assets/tokens';
import Heart from '../../Assets/Images/Heart'
import Eye from '../../Assets/Images/Eye'
import React from 'react';


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
    fillHeart,
    Author,
    showAuthor = false,
    Title,
    showEye = false,
    TitlePosition = 'aside',
    showFullText = false
}) => {

    const [heartStates, setHeartStates] = useState<{ [key: string]: boolean }>(
        Texts.reduce((obj, text) => ({ ...obj, [text.id]: false }), {})
    );

    const filteredTexts = feeling ? Texts.filter(text => text.feeling === feeling) : Texts;


    const handleHeartClick = (text: any) => {
        setHeartStates((prevState) => ({
            ...prevState,
            [text.id]: !prevState[text.id]
        }));
    };

    const handleEyeClick = (text: any) => {
        return text.id
        // mandar id para texto a ser exibido
    };

    return (
        <>
            {
                filteredTexts.map((text) => (
                    <React.Fragment key={text.id}>
                        <Article>
                            <ArticleTopTitle TitlePosition={TitlePosition}> {text.title} </ArticleTopTitle>
                            <ArticleContent>
                                {showFullText ? text.text : text.text.slice(0, 175) + '...'}
                            </ArticleContent>
                            <ArticleAuthor showAuthor={showAuthor}> {text.author} </ArticleAuthor>
                        </Article>
                        <ButtonsContainer TitlePosition={TitlePosition} className="icon">
                            <ArticleBottomTitle TitlePosition={TitlePosition}> {text.title} </ArticleBottomTitle>
                            <IconContainer showEye={showEye}>
                                <Heart onClick={() => handleHeartClick(text)} fillHeart={heartStates[text.id]} />
                                <Eye onClick={() => handleEyeClick(text)} />
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

const IconContainer = styled.span<{
    showEye: boolean;
}>`
    display: flex;
    
    svg {
    width: 28px;
    height: 28px;
}   
    
    ${props => props.showEye ? 'svg:nth-child(2){display: flex; margin-left: 12px;}' : 'svg:nth-child(2){display: none}'}


`


