import './App.css';
import QuizCard from './components/Cards/QuizCard';
// import ResultsCard from './components/Cards/ResultsCard';
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
 .Country{
    position: absolute;
    top: 10%;
    left:35%;
    right: 35%;
    color: white;
    /* font-size: 25px; */
 }
`;


const App = () => {

  const [Countries, setCountries] = React.useState([])

  React.useEffect( () => {

    const fetchData = async () => {
      const results = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag')
      setCountries(results.data)
    }

    fetchData();

  },[])
  console.log('countries', Countries)
  return (
    <Wrapper style={{backgroundImage: "url(/img/background.png)",backgroundRepeat: 'no-repeat', backgroundSize:'cover', width: '100%', backgroundPosition: 'Center'}}>
      <h1 className='Country'>Country Quiz</h1>
      <QuizCard />
      {/* <ResultsCard /> */}
    </Wrapper>
  );
}

export default App;
