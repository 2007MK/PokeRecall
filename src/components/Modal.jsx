function Modal({ status, setRound, setStatus, setClickedCardsId }) {
  if (status === "playing") return null;

  return (
    <div className="modal">
      <h2>{status}</h2>
      <button
        onClick={() => {
          setRound((prev) => prev + 1);
          setStatus("playing");
          setClickedCardsId([]);
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

export default Modal;
