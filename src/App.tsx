import { useState } from "react";
import CreatorPersonage from "./containers/create/CreatorPersonage";
import PersonagesList from "./containers/create/personages/PersonagesList";

function App() {
  const [refresh, setRefresh] = useState(false)

  const handleRefresh = () => {
    setRefresh(o => !o)
  }
  return (
    <div className="App">
      <CreatorPersonage handleRefresh={handleRefresh} />
      <PersonagesList refresh={refresh} />
    </div>
  );
}

export default App;
