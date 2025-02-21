/* eslint-disable react/prop-types */
function Heading({ type, children }) {
  if (type == "h2") return <h2 className="text-xl font-bold">{children}</h2>;
  if (type == "h3")
    return <h3 className="text-lg font-semibold">{children}</h3>;
  return <h1 className="text-4xl font-extrabold">{children}</h1>;
}

export default Heading;
