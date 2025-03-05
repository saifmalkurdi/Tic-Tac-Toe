import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? "active" : ""}>
      {!isEditing ? (
        <span className="player">
          <span className="player-name"> {playerName}</span>
          <span className="player-symbol"> {symbol}</span>
        </span>
      ) : (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleChange}
        />
      )}
      <button onClick={handleEditing}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
