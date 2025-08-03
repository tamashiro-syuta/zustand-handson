import { useBearStore } from "../../store";

export default function ObjectState() {
  const objectStateString = useBearStore((state) =>
    state.getObjectStateString()
  );

  console.log("objectStateString", objectStateString);

  return (
    <>
      <div className="card">
        <p>{objectStateString || "no data"}</p>
      </div>
    </>
  );
}
