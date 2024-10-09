import React from "react";
import File from "../components/File/File";
import Folder from "../components/Folder/Folder";
import { TFolderAndFile } from "./types";

const FileExplorer: React.FC<TFolderAndFile> = ({ explorerData }) => {
  if (explorerData && explorerData.type === "folder") {
    return <Folder explorerData={explorerData} />;
  } else {
    return <File explorerData={explorerData} />;
  }
};

export default FileExplorer;
