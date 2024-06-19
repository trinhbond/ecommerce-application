const Select = ({ options, onChange, value }) => {
  const style = {
    background: "#000000",
    color: "#ffffff",
  };

  return (
    <select onChange={onChange} value={value} style={{ ...style }}>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default Select;
