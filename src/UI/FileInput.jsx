function FileInput({ disabled, type }) {
  if ((type = "thumbnail"))
    return (
      <input
        disabled={disabled}
        type="file"
        className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded cursor-pointer font-semibold"
      />
    );
  return (
    <input
      disabled={disabled}
      type="file[]"
      className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded cursor-pointer font-semibold"
      multiple
    />
  );
}

export default FileInput;
