import { useEffect, useRef, useState } from "react";
import { TFolderAndFile } from "../../containers/types";
import RightClickMenu from "./RightClickMenu";

import "./File.css";

const File: React.FC<TFolderAndFile> = ({ explorerData }) => {
  const [rightClickMenu, setRightClickMenu] = useState(false);

  const fileRef = useRef<HTMLDivElement>(null);

  const handleRightClickMenu = (event: MouseEvent | any) => {
    event.preventDefault();
    setRightClickMenu(true);
    if (fileRef.current) {
      fileRef.current.focus();
    }
  };

  const handleMenuOptionClick = (action: "copy" | "delete" | "rename") => {
    console.log(`User Action: ${action} ; File Name: ${explorerData.name}`);
    setRightClickMenu(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (fileRef.current && !fileRef.current.contains(event.target as Node)) {
      setRightClickMenu(false);
    }
  };

  useEffect(() => {
    if (rightClickMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [rightClickMenu]);

  return (
    <div
      className="file-container"
      onContextMenu={handleRightClickMenu}
      ref={fileRef}
    >
      <span className="file-name">📄 {explorerData.name}</span>

      {rightClickMenu && (
        <RightClickMenu handleMenuOptionClick={handleMenuOptionClick} />
      )}
    </div>
  );
};

export default File;
