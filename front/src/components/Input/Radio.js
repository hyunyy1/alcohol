function Radio({ children, value, name, defaultChecked, disabled }) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
}

export default Radio;
