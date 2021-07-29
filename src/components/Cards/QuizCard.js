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
        padding-top: 1em;
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
    .man{
        position:relative;
        margin-top: -5.2em;
        float: right;
    }
    .flag{
        width: 100px;
        height: 100%;
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

const QuizCard = (props) => {

    const { setCount, count, qtType, Options, Country } = props;

    const checkAnswer = (country_value) => {
        if (qtType === 'flag') {
           
        }
        else {
                
        }
    }

    return (
        <Container>
            <Card>
                <img src={Standing} alt='man celebrating' className='man'/>
                {qtType ==='flag' ? <img src={Country.flag} alt='country flag' className='flag'/> : null}
                <h1>{qtType === 'flag' ? 'Which Country Does this Flag Belong to ?': `${Country.name} is the capital of`}</h1>
                {Options && Options.map((option, index)=> (
                    <p key={ index } id={qtType === 'flag' ? option.name : option.capital} onClick={(e) => checkAnswer(e.target.id)}>{index + 1}<span>{qtType === 'flag' ? option.name : option.capital}</span></p>
                ))}
            </Card>
            <Next onClick={()=>setCount(count+1)}>Next</Next>
        </Container>
    )
}

export default QuizCard
