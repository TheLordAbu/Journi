/* eslint-disable react/prop-types */
function Heading({ type, children }) {
  if (type == "h2") return <h2 className="text-2xl font-bold">{children}</h2>;
  if (type == "h3")
    return <h3 className="text-xl font-semibold">{children}</h3>;
  return <h1 className="text-5xl font-extrabold mb-6">{children}</h1>;
}

export default Heading;
