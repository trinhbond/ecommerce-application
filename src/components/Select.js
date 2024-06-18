const Select = ({ options, onChange, value }) => {
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default Select;
