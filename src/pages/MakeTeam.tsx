import React, { useState, useEffect } from "react";

const MakeTeam: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [alert, setAlert] = useState("added");
  const localData = JSON.parse(localStorage.getItem("team") || "[]");

  const addPlayer = (
    playerName: string,
    age: string,
    position: string,
    imgUrl: string
  ) => {
    const newPlayer = {
      id: Math.floor(Math.random() * 1000) + 1,
      playerName,
      age,
      position,
      imgUrl,
    };
    if (playerName && age && position && imgUrl) {
      localStorage.setItem("team", JSON.stringify([...localData, newPlayer]));

      setPlayerName("");
      setAge("");
      setPosition("");
      setImgUrl("");
    }
  };

  const deletePlayer = (id: string | number) => {
    const filteredPlayers = localData.filter((player: any) => {
      return player.id !== id;
    });
    localStorage.setItem("team", JSON.stringify(filteredPlayers));
  };

  return (
    <section className="yourTeam">
      <h1>Make your team</h1>
      <article className="team">
        <div className="starting">
          <h2>Starting 5</h2>
          {localData.map((player: any) => (
            <div key={player.id} className="singlePlayer">
              <div>
                <img src={player.imgUrl} alt={player.playerName} />
                <h3>{player.playerName}</h3>
              </div>
              <h3>{player.position}</h3>
              <h3>{player.age} years old</h3>
              <button
                onClick={() => {
                  deletePlayer(player.id);
                  setAlert("removed");
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="bench">
          <h2>Bench</h2>
        </div>
      </article>
      <p>Player {alert}!</p>
      <article className="filter">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={playerName}
          required
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addPlayer(playerName, age, position, imgUrl);
            }
          }}
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addPlayer(playerName, age, position, imgUrl);
            }
          }}
        />
        <input
          type="text"
          name="IMG"
          placeholder="Image URL"
          value={imgUrl}
          required
          onChange={(e) => setImgUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addPlayer(playerName, age, position, imgUrl);
            }
          }}
        />
        <button
          onClick={() => {
            addPlayer(playerName, age, position, imgUrl);
            setAlert("added");
          }}
        >
          Add player
        </button>
      </article>
    </section>
  );
};

export default MakeTeam;
