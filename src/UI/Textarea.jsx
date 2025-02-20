function Textarea({ children }) {
  return (
    <textarea className="border border-gray-300 px-3.5 py-2.5 shadow-2xs rounded h-32 w-full">
      {children}
    </textarea>
  );
}

export default Textarea;
