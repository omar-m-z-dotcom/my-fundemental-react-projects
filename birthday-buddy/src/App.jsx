import PersonsList from "./PersonsList";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([]);
  }
  return (
    <main>
      <div className="container">
        <PersonsList people={people} />
        <button type="button" className="btn btn-block" onClick={clearAll}>Clear All</button>
      </div>
    </main>
  );
};
export default App;
