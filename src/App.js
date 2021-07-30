import './App.css';
import QuizCard from './components/Cards/QuizCard';
import ResultsCard from './components/Cards/ResultsCard';
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 110vh;
 .Country{
    position: absolute;
    top: 10%;
    left:30%;
    right: 30%;
    color: white;
    @media only screen and (max-width: 1000px){
      left: 25%;
    }
    @media only screen and (max-width: 775px){
      top: 3%;
    }
    @media only screen and (max-width: 450px){
        font-size: 30px;
        left: 5%;
        right: 5%;
    }
    /* font-size: 25px; */
 }
`;


const App = () => {

  const [Countries, setCountries] = React.useState([]);
  const [DisplayCard, setDisplayCard] = React.useState({
    quiz: true,
    results: false,
  })
  const [count, setCount] = React.useState(0)

  const QuestionType = ['flag', 'capital']

  var qtType = QuestionType[Math.floor(Math.random() * QuestionType.length)]

  React.useEffect( () => {

    const fetchData = async () => {
      const results = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag')
      setCountries(results.data)
    }

    fetchData();

  },[])
  
  if (Countries.length === 0) {
    return <h1>Loading</h1>
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  var QuestIndex = (Math.floor(Math.random() * Countries.length));
  var Country = Countries[QuestIndex];
  var quest_count = 0;
  var Options = [];
  while (true) {
    var index = (Math.floor(Math.random() * Countries.length));
    if (index !== QuestIndex) {
      Options.push(Countries[index]);
      quest_count = quest_count +1
    }
    if (quest_count === 3) {
      Options.push(Country);
      break;
    }
  }
  shuffleArray(Options);
  return (
    <Wrapper style={{backgroundImage: "url(/img/background.png)",backgroundRepeat: 'no-repeat', backgroundSize:'cover', width: '100%', backgroundPosition: 'Center'}}>
      <h1 className='Country'>Country Quiz</h1>
      {DisplayCard.quiz &&
        <QuizCard
          setCount={setCount}
          count={count}
          qtType={qtType}
          Options={Options}
          Country={Country}
          setDisplayCard={setDisplayCard} />}
      {DisplayCard.results && <ResultsCard
        count={count}
        setDisplayCard={setDisplayCard}
        setCount = {setCount}
      />}
    </Wrapper>
  );
}

export default App;
