export type TExplorerType = "folder" | "file";

export type TMeta = "js" | "ts" | "html" | "img" | "svg" | "css";

export type TExplorerData = {
  type: TExplorerType;
  name: string;
  data?: Array<TExplorerData>;
  meta?: TMeta;
};

export type TFolderAndFile = {
  explorerData: TExplorerData;
};

export type TActionForRightClick = "copy" | "delete" | "rename";

export type TRightClickMenuItem = {
  handleMenuOptionClick: (action: "copy" | "delete" | "rename") => void;
};
