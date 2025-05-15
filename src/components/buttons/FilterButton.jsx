import "./FilterButton.css";

const FilterButton = ({ text, onClick }) => {
  return (
    <button className="filter-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default FilterButton;
