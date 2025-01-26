/* eslint-disable react/prop-types */
function Form({ children }) {
  return (
    <form className="px-8.5 py-12 bg-black/10 rounded-md">{children}</form>
  );
}

export default Form;
