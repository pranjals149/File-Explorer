import React, { useState } from "react";
import "./App.css";
import { Files } from "./data/data";
import FileExplorer from "./containers/FileExplorer";
import { TExplorerData } from "./containers/types";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<TExplorerData>(Files);
  return (
    <div className="file-explorer">
      <FileExplorer explorerData={data} />
    </div>
  );
}

export default App;
