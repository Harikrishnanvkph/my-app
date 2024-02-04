import "./App.css";
import CardBox from "./CardBox.jsx";
import {readOnly} from "./func.js";

function App() {
  readOnly()
  return (
    <>
      <CardBox />
    </>
  );
}

export default App;
