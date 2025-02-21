/* eslint-disable react/prop-types */
function Input({
  disabled,
  value,
  placeholder,
  type,
  id,
  onChange,
  autoComplete,
  ref,
  ...rest
}) {
  return (
    <input
      className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded"
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      id={id}
      type={type}
      onChange={onChange}
      autoComplete={autoComplete}
      {...rest}
      ref={ref}
    />
  );
}

export default Input;
