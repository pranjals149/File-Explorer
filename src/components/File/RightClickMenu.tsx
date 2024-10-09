import React from "react";
import {
  TActionForRightClick,
  TRightClickMenuItem,
} from "../../containers/types";

const RightClickMenuItem: React.FC<
  TRightClickMenuItem & {
    children: React.ReactNode;
    action: TActionForRightClick;
  }
> = ({ handleMenuOptionClick, children, action }) => {
  return (
    <div
      className="right-click-menu-item"
      onClick={() => handleMenuOptionClick(action)}
    >
      {children}
    </div>
  );
};

const RightClickMenu: React.FC<TRightClickMenuItem> = ({
  handleMenuOptionClick,
}) => {
  return (
    <div className="right-click-menu-container">
      <RightClickMenuItem
        handleMenuOptionClick={handleMenuOptionClick}
        action="copy"
      >
        Copy
      </RightClickMenuItem>
      <RightClickMenuItem
        handleMenuOptionClick={handleMenuOptionClick}
        action="delete"
      >
        Delete
      </RightClickMenuItem>
      <RightClickMenuItem
        handleMenuOptionClick={handleMenuOptionClick}
        action="rename"
      >
        Rename
      </RightClickMenuItem>
    </div>
  );
};

export default RightClickMenu;
