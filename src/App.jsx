import "./App.css";
import FetchAPIData from "./components/fetchAPIData";
import FetchPreviousValue from "./components/FetchPreviousValue";
import ToggleButton from "./components/ToggleButton";
import FetchDataUsingDebounce from "./components/FetchDataUsingDebounce";
import FetchDataUsingThrottle from "./components/FetchDataUsingThrottle";

function App() {
  return (
    <>
      {/* <FetchAPIData />
      <ToggleButton />
      <FetchPreviousValue /> */}
      {/* <FetchDataUsingDebounce /> */}
      <FetchDataUsingThrottle />
    </>
  );
}

export default App;
