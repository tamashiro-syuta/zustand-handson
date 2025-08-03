import { useBearStore } from "../../store";

export default function ObjectState() {
  const updateObjectString = useBearStore((state) => state.updateObjectString);

  return (
    <>
      <div className="card">
        <button onClick={() => updateObjectString((prev) => prev + "a")}>
          update object string
        </button>
      </div>
    </>
  );
}
