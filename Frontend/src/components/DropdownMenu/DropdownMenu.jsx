import "./DropdownMenu.css";

function DropdownMenu({ isOpen, items, handleItemClick }) {
  return (
    <div className="dropdown">
      <div className="dropdown__content">
        {isOpen && (
          <ul className="dropdown__list">
            {items.map((item, index) => (
              <li
                className="dropdown__item"
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
