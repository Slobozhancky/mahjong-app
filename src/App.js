import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { checkNumOfPrime } from "./utils.js";
import { useState } from "react";

let primesNumbers = checkNumOfPrime(60);
function App() {
  const [freeze, setFrizeClass] = useState([]);

  function cardSelectHandler(elemID) {
    setFrizeClass([...freeze, elemID]);
    console.log(freeze[0]);
    console.log(freeze[1]);

    if (freeze[0] !== freeze[1]) {
      alert(123);
    }
  }

  const items = primesNumbers.map((elem, index) => (
    <Card
      id={elem}
      key={index}
      number={elem}
      setElemToStateFreeze={setFrizeClass}
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
