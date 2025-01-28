/* eslint-disable react/prop-types */
// function Stats({ icon, title, value, color }) {
//   return (
//     <div>
//       <div className={`bg-${color}-500`}>{icon}</div>
//       <div className="flex flex-col gap-2">
//         <h4>{title}</h4>
//         <p>{value}</p>
//       </div>
//     </div>
//   );

import { IoAirplaneOutline } from "react-icons/io5";

// }
function Stats() {
  return (
    <div className="grid grid-cols-[5rem, 1fr]">
      <div className="bg-rose-500 flex place-items-center">
        <IoAirplaneOutline className="text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h4>Test Header</h4>
        <p>Test Value</p>
      </div>
    </div>
  );
}

export default Stats;
