import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { checkNumOfPrime } from "./utils.js";
import { useState } from "react";

let primesNumbers = checkNumOfPrime(60);
function App() {
  let [freeze, setFreeze] = useState();
  let targetElements = [];

  function cardSelectHandler(event) {
    targetElements.push(event);
    console.log(targetElements);

    if (targetElements.length === 2) {
      let firstId = targetElements[0].attributes.dataId.nodeValue;
      let secondId = targetElements[1].attributes.dataId.nodeValue;
      if (firstId === secondId) {
        makeFreeze(targetElements);

        targetElements = [];
      } else {
        makeHide(targetElements);

        targetElements = [];
      }
    }
  }

  function makeFreeze(params) {
    const interval = setInterval(() => {
      params.forEach((e) => {
        e.classList.add("freeze");
      });
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
    }, 500);
  }

  function makeHide(params) {
    const interval = setInterval(() => {
      params.forEach((e) => {
        e.classList.add("hide");
        e.classList.remove("active");
      });

      (function getFreezeStatus(params) {
        setFreeze((freeze) => (freeze = false));
      })();
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
    }, 500);
  }

  const items = primesNumbers.map((elem, index) => (
    <Card
      id={elem}
      key={index}
      freezeStatus={freeze}
      checkElem={cardSelectHandler}
    />
  ));

  return (
    <div className="App">
      <main className="main">
        <h1 className={styles.h1}>Mahjong</h1>
        <div className={styles.itemsWrapper}>{items}</div>
      </main>
    </div>
  );
}

export default App;
