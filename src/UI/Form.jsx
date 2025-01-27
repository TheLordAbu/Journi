/* eslint-disable react/prop-types */
function Form({ children }) {
  return (
    <form className="px-8.5 py-8 bg-gray-50 border border-gray-200 rounded-md">
      {children}
    </form>
  );
}

export default Form;
