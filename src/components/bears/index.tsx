import { useBearStore } from "../../store";

export default function Bears() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const updateBears = useBearStore((state) => state.updateBears);

  return (
    <>
      <h1>Vite + React {bears}</h1>
      <div className="card">
        <button onClick={() => increasePopulation()}>count up</button>
        <button onClick={() => removeAllBears()}>reset count</button>
        <button onClick={() => updateBears(10)}>set count 10</button>
      </div>
    </>
  );
}
