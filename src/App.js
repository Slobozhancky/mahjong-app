import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { checkNumOfPrime } from "./utils.js";
import { useState } from "react";

let primesNumbers = checkNumOfPrime(60);
function App() {
  // const [freeze, setFrizeClass] = useState([1]);
  let arr = [];

  function cardSelectHandler(event) {
    arr.push(event);
    console.log(arr);

    if (arr.length === 2) {
      let firstId = arr[0].attributes.dataId.nodeValue;
      let secondId = arr[1].attributes.dataId.nodeValue;
      if (firstId === secondId) {
        arr.forEach((e) => e.classList.add("freeze"));

        alert(true);
        return arr = [];
      } else {
        arr.forEach((e) => e.classList.add("hide"));
        // }

        return arr = [];
      }
    }
  }

  const items = primesNumbers.map((elem, index) => (
    <Card id={elem} key={index} number={elem} checkElem={cardSelectHandler} />
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
