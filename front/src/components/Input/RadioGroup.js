function RadioGroup({ label, children }) {
  return (
    <fieldset style={{
      border:"none",
      }}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}
export default RadioGroup;
