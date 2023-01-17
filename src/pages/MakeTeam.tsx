import React, { useState } from "react";

const MakeTeam: React.FC = () => {
  const [startingFive, setStartingFive] = useState([
    {
      id: 0,
      playerName: "",
      age: "",
      position: "",
      imgUrl: "",
    },
  ]);
  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const localData = JSON.parse(localStorage.getItem("team") || "");

  const addPlayer = (
    playerName: string,
    age: string,
    position: string,
    imgUrl: string
  ) => {
    const newPlayer = {
      id: Math.floor(Math.random() * 1000),
      playerName,
      age,
      position,
      imgUrl,
    };

    if (playerName && age && position && imgUrl) {
      setStartingFive([...startingFive, newPlayer]);
      localStorage.setItem(
        "team",
        JSON.stringify([...startingFive, newPlayer])
      );

      setPlayerName("");
      setAge("");
      setPosition("");
      setImgUrl("");
    }
  };

  return (
    <section className="yourTeam">
      <h1>Make your team</h1>
      <article className="team">
        <div className="starting">
          <h2>Starting 5</h2>
          {localData.slice(1, localData.length).map((player: any) => (
            <div key={player.id} className="singlePlayer">
              <div>
                <img src={player.imgUrl} alt={player.playerName} />
                <h3>{player.playerName}</h3>
              </div>
              <h3>{player.position}</h3>
              <h3>{player.age} years old</h3>
              <h5>del</h5>
            </div>
          ))}
        </div>
        <div className="bench">
          <h2>Bench</h2>
        </div>
      </article>
      <article className="filter">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={playerName}
          required
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <div className="position-wrapper">
          <select
            name="position"
            value={position}
            required
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="None">Position</option>
            <option value="PG">PG</option>
            <option value="SG">SG</option>
            <option value="SF">SF</option>
            <option value="PF">PF</option>
            <option value="C">C</option>
          </select>
        </div>
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="IMG"
          placeholder="Image URL"
          value={imgUrl}
          required
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button
          onClick={() => {
            addPlayer(playerName, age, position, imgUrl);
          }}
        >
          Add player
        </button>
      </article>
    </section>
  );
};

export default MakeTeam;
