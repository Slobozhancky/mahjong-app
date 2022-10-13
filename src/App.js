import styles from "./App.module.css";
import Card from "./components/Card/Card";

function App() {
  let primesNumbers = [];
  function checkNumOfPrime() {
    for (let i = 0; i < 60; i++) {
      if (isPrime(i) === true) {
        primesNumbers.push(i);
      }
    }

    return (primesNumbers.concat(primesNumbers).sort(() => 0.5 - Math.random())).slice(0,32);
  }

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  primesNumbers = checkNumOfPrime();

  let items = primesNumbers.map((elem) => <Card id={elem} number={elem} />);

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
