import React, { useState } from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ sushiData, onEatSushi, eatenSushi }) {
  const[beltPosition, setBeltPosition] = useState(0)

  function sushiToRender(){
    const displayArr = sushiData.slice(beltPosition, beltPosition + 4)

    return displayArr
  }
  
  function handleMoreSushi(){
    setBeltPosition((prevPosition) => prevPosition + 4)
  }

  const sushiList = sushiToRender().map((sushiObj) => (
    <Sushi
      key={sushiObj.id}
      sushiObj={sushiObj}
      onEatSushi={onEatSushi}
      eatenSushi={eatenSushi}
    />
  ))

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onAddSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
