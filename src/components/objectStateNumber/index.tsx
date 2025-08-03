import { useBearStore } from "../../store";

export default function ObjectState() {
  const objectState = useBearStore((state) => state.objectState);
  const updateObjectNumber = useBearStore((state) => state.updateObjectNumber);

  console.log("objectState", objectState);

  return (
    <>
      <div className="card">
        <button onClick={() => updateObjectNumber((prev) => prev + 1)}>
          update object number
        </button>
      </div>
    </>
  );
}
