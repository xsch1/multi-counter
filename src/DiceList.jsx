export default function DiceList({ dice, onRollOne, onRemove }) {
  if (!dice.length) return <p>주사위를 추가해보세요.</p>;

  return (
    <ul className="dice-list">
      {dice.map((value, i) => (
        <li key={i} className="die">
          <span className="face">{value}</span>
          <div className="actions">
            <button onClick={() => onRollOne(i)}>굴리기</button>
            <button onClick={() => onRemove(i)}>삭제</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
