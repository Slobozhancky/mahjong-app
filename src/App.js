import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { checkNumOfPrime } from "./utils.js";
import { useState } from "react";

let primesNumbers = checkNumOfPrime(60);
function App() {
  let [freeze, setFreeze] = useState();
  let arr = [];

  function cardSelectHandler(event) {
    arr.push(event);
    console.log(arr);

    if (arr.length === 2) {
      let firstId = arr[0].attributes.dataId.nodeValue;
      let secondId = arr[1].attributes.dataId.nodeValue;
      if (firstId === secondId) {
        makeFreeze(arr);

        arr = [];
      } else {
        makeHide(arr);

        arr = [];
      }
    }
  }

  function makeFreeze(a) {
    const interval = setInterval(() => {
      a.forEach((e) => {
        e.classList.add("freeze");
      });
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
    }, 500);
  }

  function makeHide(a) {
    const interval = setInterval(() => {
      a.forEach((e) => {
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
