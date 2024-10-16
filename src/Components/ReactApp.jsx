import React, { useEffect, useState } from "react";
import "./ReactApp.css";

const ReactApp = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  //i need to access information of the object I clicked
  function handleAddFighter(fighter) {
    if (money > fighter.price) {
      setTeam((prevTeam) => [...prevTeam, fighter]);
      setMoney((preMoney) => preMoney - fighter.price);
    } else {
      console.log("No Money!");
    }
    // updateStrength();
    // updateAgility();
  }

  function handleRemoveFighter(fighter) {
    setTeam(
      team.filter((i) => {
        return i.name !== fighter.name;
      })
    );
    setMoney((preMoney) => preMoney + fighter.price);
  }

  function updateStrength() {
    setTotalStrength(
      team.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.strength;
      }, 0)
    );
  }

  function updateAgility() {
    setTotalAgility(
      team.reduce((accumulator, currentElement) => {
        return accumulator + currentElement.agility;
      }, 0)
    );
  }

  useEffect(() => {
    updateAgility();
    updateStrength();
  });

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Total strength: {totalStrength}</h3>
      <h3>Total agility: {totalAgility}</h3>
      <h3>{team.length === 0 ? "Add some team members!" : ""}</h3>
      <ul>
        {team.map((element, idx) => (
          <li key={idx}>
            <img src={element.img} />
            <p>name: {element.name}</p>
            <p>price: {element.price}</p>
            <p>strength: {element.strength}</p>
            <p>agility: {element.agility}</p>
            <button
              onClick={() => {
                handleRemoveFighter(element);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {zombieFighters.map((element, idx) => (
          <li key={idx}>
            <img src={element.img} />
            <p>name: {element.name}</p>
            <p>price: {element.price}</p>
            <p>strength: {element.strength}</p>
            <p>agility: {element.agility}</p>
            <button
              onClick={() => {
                handleAddFighter(element);
              }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReactApp;
