import Search from "./component/Search";
import Line from "./component/Line";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("smiley");

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <Line search={search} />
    </div>
  );
};

export default App;
