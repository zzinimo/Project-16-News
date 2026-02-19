import "./DropdownMenu.css";
import { useState } from "react";

function DropdownMenu({ isOpen, items, handleItemClick, setActiveModal }) {
  return (
    <div className="dropdown__container">
      <div className="dropdown__container-content">
        {isOpen && (
          <ul className="dropdown__menu">
            {items.map((item, index) => (
              <li
                className="dropdown__menu-item"
                key={index}
                onClick={() => {
                  handleItemClick(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
