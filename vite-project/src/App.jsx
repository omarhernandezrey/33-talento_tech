import React, { useState, useEffect } from 'react';
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css';

function App() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const { fact } = data;
        setFact(fact);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCatImage = async () => {
      if (fact) {
        try {
          const firstWord = fact.split(' ', 3).join(' ');
          const catImageUrl = `https://cataas.com/cat/says/${encodeURIComponent(firstWord)}`;
          setCatImageUrl(catImageUrl);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchCatImage();
  }, [fact]);

  return (
    <>
      <h1>useState, useEffect example: Random cat</h1>
      {fact && <p>{fact}</p>}
      {catImageUrl && <img src={catImageUrl} alt='random' width={400} height={400} />}
    </>
  );
}

export default App;
