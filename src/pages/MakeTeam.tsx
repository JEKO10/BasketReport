import React, { useState, useEffect } from "react";

let timer: any;

const MakeTeam: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [alert, setAlert] = useState("All fields are required!");
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [updateDom, setUpdateDom] = useState(false);
  const localData = JSON.parse(localStorage.getItem("team") || "[]");

  function hideAlert() {
    setIsShowAlert(false);
  }

  function restartInterval() {
    clearInterval(timer);
    timer = setInterval(hideAlert, 3000);
  }

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
    setAlert("All fields are required!");
    setIsShowAlert(true);
    restartInterval();

    if (playerName && age && position && imgUrl) {
      localStorage.setItem("team", JSON.stringify([...localData, newPlayer]));

      setPlayerName("");
      setAge("");
      setPosition("");
      setImgUrl("");
      setAlert("Player was added!");
      setIsShowAlert(true);
      restartInterval();
    }
  };

  const deletePlayer = (id: string | number) => {
    const filteredPlayers = localData.filter((player: any) => {
      return player.id !== id;
    });
    localStorage.setItem("team", JSON.stringify(filteredPlayers));
    setAlert("Player was removed!");
    setIsShowAlert(true);
    restartInterval();
    setUpdateDom(!updateDom);
  };

  return (
    <section className="yourTeam">
      <h1>Make your team</h1>
      <article className="team">
        <div className="starting">
          <h2>Starting 5</h2>
          {localData.slice(0, 5).map((player: any) => (
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
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="bench">
          <h2>Bench</h2>
          {localData.slice(5, localData.length).map((player: any) => (
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
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </article>
      {isShowAlert ? <p id="alert">{alert}</p> : ""}
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
            <option value="">Position</option>
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
          disabled={localData.length === 12 ? true : false}
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
