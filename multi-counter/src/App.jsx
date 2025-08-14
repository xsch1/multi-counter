import { useState, useCallback, useMemo } from 'react';
import DiceList from './DiceList.jsx';
import Summary from './Summary.jsx';
import './App.css';

const roll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [dice, setDice] = useState([roll(), roll()]);

  const rollOne = useCallback((index) => {
    setDice((prev) => prev.map((v, i) => (i === index ? roll() : v)));
  }, []);

  const rollAll = useCallback(() => {
    setDice((prev) => prev.map(() => roll()));
  }, []);

  const addDie = useCallback(() => {
    setDice((prev) => [...prev, roll()]);
  }, []);

  const removeDie = useCallback((index) => {
    setDice((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const reset = useCallback(() => {
    setDice([roll(), roll()]);
  }, []);

  const stats = useMemo(() => {
    const sum = dice.reduce((a, b) => a + b, 0);
    const max = dice.length ? Math.max(...dice) : 0;
    const min = dice.length ? Math.min(...dice) : 0;
    return { sum, avg: dice.length ? sum / dice.length : 0, max, min };
  }, [dice]);

  return (
    <div className="app">
      <h1>🎲 멀티 주사위</h1>

      <div className="toolbar">
        <button onClick={rollAll}>모두 굴리기</button>
        <button onClick={addDie}>주사위 추가</button>
        <button onClick={reset}>리셋</button>
      </div>

      <DiceList dice={dice} onRollOne={rollOne} onRemove={removeDie} />
      <Summary stats={stats} count={dice.length} />
    </div>
  );
}
