function Row({ children, type }) {
  if (type == "2-cols")
    return (
      <div className="grid grid-cols-2 gap-4 justify-between items-center">
        {children}
      </div>
    );
  if (type == "end")
    return (
      <div className="flex gap-3 justify-end items-center">{children}</div>
    );
  return (
    <div className="flex justify-between items-center mb-8">{children}</div>
  );
}

export default Row;
