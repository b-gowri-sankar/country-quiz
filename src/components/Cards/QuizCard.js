import React from 'react';
import styled from 'styled-components';
import Standing from '../../country-quiz-master/standing.svg'

export const Container = styled.div`

    position: absolute;
    top:20%;
    left: 35%;
    right: 35%;
    /* bottom: 30%; */
    background-color: white;
    padding: 20px;
    border-radius: 17px;

    /* @media screen and (min-width: 1000px){
        left:40%;
        right: 40%;
        background-color: beige;
    } */
    /* height: 70vh; */
`;

const Card = styled.div`
    h1{
        font-size: 23px;
        color: #2F527B;
        padding-top: 3em;
        padding-bottom: 1em;
    }
    p{
        border: 2px solid rgba(96, 102, 208, 0.7);
        padding: 5px 10px;
        margin-bottom: 20px;
        border-radius: 16px;
        cursor: pointer;
        &:hover{
            background-color: #F9A826;
            color: white;
            border: none;
            border: 2px solid #F9A826;
        }
        span{
            padding-left: 10px;
        }
    }
    img{
        position:relative;
        margin-top: -5.2em;
        float: right;
    }
`;
const Next = styled.a`
    background-color: #F9A826;
    padding: 10px 20px;
    /* font-weight: 600; */
    line-height: 27px;
    cursor: pointer;
    color:white;
    float: right;
    border-radius: 12px;
`;

const QuizCard = () => {
    return (
        <Container>
            <Card>
                <img src={Standing} alt='man celebrating' />
                <h1>Kuala Lumpur is the capital of</h1>
                <p>A.<span> Vieatnam </span></p>
                <p>B.<span> Malasiya</span></p>
                <p>C.<span> Delhi</span></p>
                <p>D.<span>Kabul</span> </p>
            </Card>
            <Next>Next</Next>
        </Container>
    )
}

export default QuizCard
