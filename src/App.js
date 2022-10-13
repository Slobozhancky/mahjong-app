import styles from './App.module.css';
import Card from './components/Card/Card';

function App() {
  
  return (
    <div className="App">
      <main className="App-header">
        <h1 className={styles.h1}>Mahjong</h1>
        <Card number={1}/>
      </main>
    </div>
  );
}

export default App;
