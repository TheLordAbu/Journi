function Button({ type, children, icon, onClick }) {
  if (type == "icon")
    return (
      <button
        className="px-4 py-2 rounded flex items-center justify-center bg-gradient-to-r from-brand-light to-brand-dark shadow-md text-gray-50 font-semibold cursor-pointer"
        onClick={onClick}
      >
        {icon} {children}
      </button>
    );
  if (type == "plain")
    return (
      <button
        className="px-4 py-2 rounded bg-white text-gray-800 cursor-pointer font-semibold"
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      className="px-4 py-2 rounded bg-gradient-to-r from-brand-light to-brand-dark shadow-md text-gray-50 font-semibold cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
