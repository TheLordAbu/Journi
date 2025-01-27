/* eslint-disable react/prop-types */
function Input({ value, placeholder, type, id, onChange, autoComplete }) {
  return (
    <input
      className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded"
      placeholder={placeholder}
      value={value}
      id={id}
      type={type}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

export default Input;
