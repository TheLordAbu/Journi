import { useEffect, useState } from "react";

function Test() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default Test;
