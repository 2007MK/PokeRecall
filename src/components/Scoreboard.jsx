function Scoreboard({ clickedCardsId, highScore }) {
  return (
    <div className="scoreboard">
      <h1>PokeRecall</h1>
      <div className="score-container">
        <h3>Score : {clickedCardsId.length}</h3>
        <h3>High Score : {highScore}</h3>
      </div>
    </div>
  );
}

export default Scoreboard;
