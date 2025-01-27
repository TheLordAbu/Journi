/* eslint-disable react/prop-types */
function FormRow({ label, error, children, type }) {
  if (type == "row")
    return (
      <div className="flex gap-2.5 text-left py-5.5">
        {children}
        {error && <spam className="text-sm text-red-500">{error}</spam>}
      </div>
    );

  return (
    <div className="flex flex-col gap-2.5 text-left py-3.5">
      <label className="text-gray-900 font-bold text-md">{label}</label>
      {children}
      {error && <spam className="text-sm text-red-500">{error}</spam>}
    </div>
  );
}

export default FormRow;
