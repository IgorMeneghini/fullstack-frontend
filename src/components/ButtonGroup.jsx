import React, { useState } from "react";
import CardList from "./CardList";
import "../styles/ButtonGroup.css";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState("Invited");

  const buttons = ["Invited", "Accepted"];

  return (
    <div>
      <div className="button-container">
        {buttons.map(button => (
          <button
            key={button}
            className={`custom-button ${selectedButton === button ? "selected" : ""}`}
            onClick={() => setSelectedButton(button)}
          >
            {button}
          </button>
        ))}
      </div>

      <CardList selectedButton={selectedButton} />
    </div>
  );
}

export default ButtonGroup;