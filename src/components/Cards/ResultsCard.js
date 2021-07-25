import React from 'react';
import styled from 'styled-components';
import Winner from '../../country-quiz-master/winner.svg'
import { Container } from './QuizCard';

const Contain = styled.div`
    padding: 20px;
    text-align: center;
    img{
        width: 100%;
        height: 20vh;
    }

    h1{
        color: #1D355D;
        margin-top: 1em;
        font-size: 40px;
    }
    p{
        color: #1D355D;
        margin-top: -7px;
        span{
            color: #60BF88;
            font-size: 30px;
        }
        margin-bottom: 3em;
    }
`;

const Link = styled.a`
    color: #1D355D;
    border:2px solid #1D355D;
    padding: 0.6em 3.6em;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 12px;
`;

const ResultsCard = () => {
    return (
        <Container>
            <Contain>
                <img src={Winner} alt='winner ' />
                <h1>Results</h1>
                <p>you got <span>4</span> correct answers</p>
                <Link>Try Again</Link>
            </Contain>
        </Container>
    )
}

export default ResultsCard
