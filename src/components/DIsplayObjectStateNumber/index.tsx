import { useBearStore } from "../../store";

export default function ObjectState() {
  const objectStateNumber = useBearStore((state) =>
    state.getObjectStateNumber()
  );

  console.log("objectStateNumber", objectStateNumber);

  return (
    <>
      <div className="card">
        <p>{objectStateNumber}</p>
      </div>
    </>
  );
}
