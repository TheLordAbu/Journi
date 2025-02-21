function FileInput({ disabled, varation, ref, ...rest }) {
  if ((varation = "thumbnail"))
    return (
      <input
        ref={ref}
        disabled={disabled}
        type="file"
        className="border border-gray-300 bg-gray-800/30 px-3.5 py-2.5 shadow-2xs rounded cursor-pointer font-semibold"
        {...rest}
      />
    );
  return (
    <input
      disabled={disabled}
      type="file"
      className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded cursor-pointer font-semibold"
      ref={ref}
      multiple
      {...rest}
    />
  );
}

export default FileInput;
