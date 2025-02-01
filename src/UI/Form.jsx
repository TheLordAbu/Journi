/* eslint-disable react/prop-types */
function Form({ children }) {
  return (
    <form className="px-8.5 py-8 bg-gray-50 border border-gray-200 rounded-md shadow-md shadow-stone-900/50">
      {children}
    </form>
  );
}

export default Form;
