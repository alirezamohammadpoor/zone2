import "./FilterButton.css";

const FilterButton = ({ text, onClick, isSelected }) => {
  return (
    <button
      className={`filter-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
