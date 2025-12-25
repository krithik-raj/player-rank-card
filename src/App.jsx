import { useEffect, useState } from "react";

const playersData = [
  {
    id: 1,
    name: "player1",
    score: 0,
  },
  {
    id: 2,
    name: "player2",
    score: 0,
  },
  {
    id: 3,
    name: "player3",
    score: 0,
  },
  {
    id: 4,
    name: "player4",
    score: 0,
  },
  {
    id: 5,
    name: "player5",
    score: 0,
  },
  {
    id: 6,
    name: "player6",
    score: 0,
  },
];

function App() {
  const [player, setPlayer] = useState(playersData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayer((prev) =>
        prev.map((player) => ({
          ...player,
          score: Math.floor(Math.random() * 900),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sortPlayerData = player.sort((a, b) => a.score - b.score);

  const tableData = ["Rank", "Name", "Score"];
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <div className="bg-orange-300 max-w-lg w-full px-5 py-2 rounded-xl flex gap-2 justify-between">
        {tableData.map((val) => (
          <div className="px-3 text-black text-center font-bold rounded-xl">
            <h3>{val}</h3>
          </div>
        ))}
      </div>
      {sortPlayerData.map((val, index) => (
        <div
          className="bg-amber-500 max-w-lg w-full px-5 py-2 rounded-xl flex gap-2 justify-between"
          key={val.id}
        >
          <div className="px-3 text-black font-bold w-15">
            <h3>{index + 1}</h3>
          </div>
          <div className="px-3 text-black font-bold">
            <h3>{val.name}</h3>
          </div>
          <div className="px-3 text-black font-bold w-15">
            <h3>{val.score}</h3>
          </div>
          <div className="px-3 text-black font-bold w-15">
            <h3>{val.status}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
