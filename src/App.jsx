import { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";

function App() {
  // State Variables
  const [cards, setCards] = useState([]);
  const [clickedCardsId, setClickedCardsId] = useState([]);
  const [status, setStatus] = useState("playing");
  const [round, setRound] = useState(1);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    let ignore = false;
    setCards([]);
    function generateRandomIDs(N) {
      const randomIds = [];
      // for (let i = N; i > 0; i--) {
      //   let id = Math.floor(Math.random() * 1025) + 1;
      //   randomIds.push(id);
      // }
      while (randomIds.length < N) {
        let id = Math.floor(Math.random() * 1025) + 1;
        if (!randomIds.includes(id)) randomIds.push(id);
      }
      return randomIds;
    }

    async function fetchData(pokemonId) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP ERROR. STATUS : ${response.status}`);
        }
        const rawData = await response.json();
        const id = rawData.id;
        const name = rawData.name;
        const img = rawData.sprites.other.home.front_default;

        if (!ignore) setCards((prev) => [...prev, { id, name, img }]);
      } catch (err) {
        console.log(err);
      }
    }

    const Ids = generateRandomIDs(8);
    Ids.forEach((id) => {
      fetchData(id);
    });

    return () => {
      ignore = true;
    };
  }, [round]);

  function onClick(id) {
    setClickedCardsId((prev) => {
      // LOSE
      if (prev.includes(id)) {
        setHighScore((hs) => Math.max(hs, prev.length));
        // setStatus("lost");
        setRound((prev) => prev + 1);
        return [];
      }

      const next = [...prev, id];

      // WIN
      if (next.length === cards.length) {
        setHighScore((hs) => Math.max(hs, next.length));
        // setStatus("won");
        setRound((prev) => prev + 1);
        return [];
      }

      // CONTINUE GAME
      return next;
    });

    setCards((prev) => shuffle(prev));
  }

  function shuffle(cards) {
    let shuffled = [...cards]; // Copying the array so that the original is not mutated.
    // using Fisher-Yates Algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      // array destructuring to swap the places
      [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
    }
    return shuffled;
  }

  return (
    <>
      <Scoreboard
        clickedCardsId={clickedCardsId}
        highScore={highScore}
      ></Scoreboard>
      <CardGrid cards={cards} onClick={onClick} status={status}></CardGrid>
    </>
  );
}

export default App;
