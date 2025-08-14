export default function Summary({ stats, count }) {
  const { sum, avg, max, min } = stats;

  return (
    <div className="summary">
      <h2>요약</h2>
      <p>개수: {count}</p>
      <p>합계: {sum}</p>
      <p>평균: {avg.toFixed(2)}</p>
      <p>최댓값: {max}</p>
      <p>최솟값: {min}</p>
    </div>
  );
}
