import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setSushiData)
  }, []);

  function handleEatSushi(sushiId){
    const sushi = sushiData.find((sushiObj) => sushiObj.id === sushiId)
    if(!eatenSushi.includes(sushiId) && wallet - sushi.price >= 0){
      setEatenSushi((prevState) => [...prevState, sushiId])
      setWallet((prevWallet) => prevWallet - sushi.price)
    } else {
      alert("you already ate this sushi!")
    }
  }

  if(!sushiData) return <h3>Loading...</h3>

  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} onEatSushi={handleEatSushi} eatenSushi={eatenSushi}/>
      <Table wallet={wallet} eatenSushi={eatenSushi} />
    </div>
  );
}

export default App;
