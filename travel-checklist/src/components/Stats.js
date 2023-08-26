export default function Stats({ items }) {
  if (items.length < 1)
    return (
      <footer className="stats">
        <em>Prepare for your journey with us🚀</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {numItems} item{numItems === 1 ? "" : "s"} for your trip and
          you have packed {packedItems} till now ({percentage}%)
        </em>
      ) : (
        <em>You have completed your travel list! Fly away ✈</em>
      )}
    </footer>
  );
}
