import React from 'react';
import styled from 'styled-components';
import Standing from '../../country-quiz-master/standing.svg'

export const Container = styled.div`

    position: absolute;
    top:20%;
    left: 30%;
    right: 30%;
    /* bottom: 30%; */
    background-color: white;
    padding: 20px;
    border-radius: 17px;

    @media only screen and (max-width: 1000px){
        left: 25%;
        right: 25%;
    }
    @media only screen and (max-width: 775px){
      left: 20%;
      right: 20%;
    }
    @media only screen and (max-width: 450px){
        left: 5%;
        right: 5%;
    }
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
    .success{
        border: 2px solid #60BF88;
        background-color: #60BF88;
        color: white;
        &:hover{
            border: 2px solid #60BF88;
            background-color: #60BF88;
            color: white;
        }
    }
    .fail{
        border:2px solid #EA8282;
        background-color:#EA8282;
        color: white;
        &:hover{
            border:2px solid #EA8282;
            background-color:#EA8282;
            color: white;
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

    const { setCount, count, qtType, Options, Country, setDisplayCard } = props;

    const [setting, setSetting] = React.useState({
        success: -1,
        failure: -1
    });

    // console.log('Country', Country)
   

    const checkAnswer = (e, index) => {
            let indexSuccess = Options.findIndex(index => index.name===Country.name )
            if (indexSuccess === index) {
                console.log('this is right answer')
                setSetting({...setting,success: index})
            }
            else {
                console.log('this is wrong answer')
                
                setSetting({...setting,success: indexSuccess, failure: index})
            }
    }

    console.log('this is settings: ',setting)

    const NextCard = () => {
        if (setting.failure !== -1) {
            setDisplayCard({
                quiz: false,
                results: true
            })
        }
        else {
            setCount(count + 1)
            setSetting({...setting, success: -1, failure: -1})
        }
    }

    return (
        <Container>
            <Card>
                <img src={Standing} alt='man celebrating' className='man'/>
                {qtType ==='flag' ? <img src={Country.flag} alt='country flag' className='flag'/> : null}
                <h1>{qtType === 'flag' ? 'Which Country Does this Flag Belong to ?': `${Country.capital} is the capital of`}</h1>
                {Options && Options.map((option, index)=> (
                    <p
                        className={`${index === setting.success ? 'success': null} ${index === setting.failure ? 'fail': ''}`}
                        key={option.name}
                        id={option.name}
                        onClick={(e) => checkAnswer(e, index)}
                    >
                        {index + 1}
                        <span>{option.name}</span>
                    </p>
                ))}
            </Card>
            <Next onClick={() => NextCard() }>Next</Next>
        </Container>
    )
}

export default QuizCard
