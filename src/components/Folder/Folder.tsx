import React, { useState } from "react";
import FileExplorer from "../../containers/FileExplorer";
import { TFolderAndFile } from "../../containers/types";

import "./Folder.css";

const Folder: React.FC<TFolderAndFile> = ({ explorerData }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const handleExpand = () => {
    setExpand(!expand);
    if (activeFolder === explorerData.name) {
      setActiveFolder(null);
    } else {
      setActiveFolder(explorerData.name);
    }
  };

  const isActive = explorerData.name === activeFolder;

  return (
    <div className="folder-container">
      <div
        onClick={handleExpand}
        className={`folder-item ${isActive ? "folder-active" : ""}`}
      >
        <span>📁 {explorerData.name}</span>
      </div>

      {expand && (
        <div className="folder-data">
          {explorerData.data &&
            explorerData.data.map((exp, idx) => {
              return <FileExplorer key={idx} explorerData={exp} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Folder;
