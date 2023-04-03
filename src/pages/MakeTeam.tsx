import React, { useState, useEffect } from "react";
import { GiLeg } from "react-icons/gi";
import { useGlobalContext } from "../context";
import { IData } from "../types/contextTypes";

type Player = {
  id: number;
  imgUrl: string;
  playerName: string;
  position: string;
  age: number;
};

let timer: ReturnType<typeof setTimeout>;

const MakeTeam: React.FC = () => {
  const { setQuery } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [alert, setAlert] = useState(0);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [updateDom, setUpdateDom] = useState(false);
  const localData = JSON.parse(localStorage.getItem("team") || "[]");

  useEffect(() => {
    setQuery("stats");
  }, []);

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

    setAlert(0);
    setIsShowAlert(true);
    restartInterval();

    if (localData.length === 12) {
      setAlert(3);
      setIsShowAlert(true);
    } else if (
      localData.length <= 12 &&
      playerName &&
      age &&
      position &&
      imgUrl
    ) {
      localStorage.setItem("team", JSON.stringify([...localData, newPlayer]));

      setPlayerName("");
      setAge("");
      setPosition("");
      setImgUrl("");
      setAlert(1);
      setIsShowAlert(true);
    }
  };

  const deletePlayer = (id: string | number) => {
    const filteredPlayers = localData.filter((player: IData) => {
      return player.id !== id;
    });
    localStorage.setItem("team", JSON.stringify(filteredPlayers));

    setAlert(2);
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
          {localData.slice(0, 5).map((player: Player) => (
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
                <GiLeg />
              </button>
            </div>
          ))}
        </div>
        <div className="bench">
          <h2>Bench</h2>
          {localData.slice(5, localData.length).map((player: Player) => (
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
                <GiLeg />
              </button>
            </div>
          ))}
        </div>
      </article>
      <p
        id="alert"
        style={
          isShowAlert && alert === 0
            ? {
                visibility: "visible",
                opacity: 1,
                transform: `translate(10px, 0)`,
              }
            : isShowAlert && alert === 1
            ? {
                visibility: "visible",
                opacity: 1,
                transform: `translate(15px, 0)`,
              }
            : isShowAlert && alert === 2
            ? {
                visibility: "visible",
                opacity: 1,
                transform: `translate(20px, 0)`,
              }
            : isShowAlert && alert === 3
            ? {
                visibility: "visible",
                opacity: 1,
                transform: `translate(25px, 0)`,
              }
            : {
                visibility: "hidden",
                opacity: 0,
                transform: `translate(0, 0)`,
              }
        }
      >
        {alert === 0
          ? "All fields are required!"
          : alert === 1
          ? "Player was added!"
          : alert === 2
          ? "Player was removed!"
          : "Your roster is full!"}
      </p>
      <article className="filter">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={playerName}
          maxLength={23}
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
          maxLength={3}
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
          // disabled={localData.length === 12 ? true : false}
          onClick={() => addPlayer(playerName, age, position, imgUrl)}
        >
          Add player
        </button>
      </article>
    </section>
  );
};

export default MakeTeam;
