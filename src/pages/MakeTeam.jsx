import React from "react";

function MakeTeam() {
  return (
    <section className="yourTeam">
      <h1>Make your team</h1>
      <article className="team">
        <div className="starting">
          <h2>Starting 5</h2>
        </div>
        <div className="bench">
          <h2>Bench</h2>
        </div>
      </article>
      <article className="filter">
        <input type="text" name="name" placeholder="Name" />
        <div className="position-wrapper">
          <select name="position">
            <option value="none" selected disabled hidden>
              Position
            </option>
            <option value="PG">PG</option>
            <option value="SG">SG</option>
            <option value="SF">SF</option>
            <option value="PF">PF</option>
            <option value="C">C</option>
          </select>
        </div>
        <input type="text" name="image" placeholder="Age" />
        <input type="text" name="IMG" placeholder="Image URL" />
        <button>Add player</button>
      </article>
    </section>
  );
}

export default MakeTeam;
