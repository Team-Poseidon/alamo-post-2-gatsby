import React from 'react'
import styled from 'styled-components'
import Link from '../components/link'

const ItemContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    word-break: break-word;
    height: 13rem;
    width: 14rem;
    padding: 1rem 0;

`
const RoundedIconBackground = styled.div`
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    background: #6e89bd;
    color: #fff;
    border-radius: 4rem;
    justify-content: center;
`
const TextContainer = styled.div`
    text-align: center;
`
const TextInfo = styled.p`
    color: #6c757d;
`

export default ({text, type, Icon, href}) => {

    return (
        <ItemContainer>
            <RoundedIconBackground>
                <Icon size={30} />
            </RoundedIconBackground>
            <TextContainer>
                <h5>{type}</h5>
                <TextInfo>
                    {href ? <Link to={href}>{text}</Link> : text}
                </TextInfo>
            </TextContainer>
        </ItemContainer>
    )
}