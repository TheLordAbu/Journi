import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>
      <Link to="/" className="hover:text-green-400 transition-all">
        &larr; Home
      </Link>
    </div>
  );
}

export default Error;
