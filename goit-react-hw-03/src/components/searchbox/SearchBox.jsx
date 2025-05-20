import css from "./SearchBox.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input}
      />
    </div>
  );
};
export default Filter;
