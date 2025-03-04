/* eslint-disable react/prop-types */
function JourniTeaserButton({ children, onClick, disabled, className }) {
  const base =
    "opacity-0 group-hover:opacity-100 absolute z-50 cursor-pointer bg-stone-900/50 text-gray-100 p-2 rounded-full shadow-md shadow-black/50 hover:bg-brand";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  );
}

export default JourniTeaserButton;
