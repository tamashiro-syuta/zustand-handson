import "./App.css";
import DisplayObjectStateString from "./components/DIsplayObjectStateString";
import DisplayObjectStateNumber from "./components/DIsplayObjectStateNumber";
import ObjectStateNumber from "./components/objectStateNumber";
import ObjectStateString from "./components/objectStateString";
import Bears from "./components/bears";

function App() {
  return (
    <>
      <Bears />
      <ObjectStateNumber />
      <ObjectStateString />
      <DisplayObjectStateNumber />
      <DisplayObjectStateString />
    </>
  );
}

export default App;
