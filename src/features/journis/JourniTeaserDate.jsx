/* eslint-disable react/prop-types */
import { format } from "date-fns";
function JourniTeaserDate({ startDate, endDate }) {
  return (
    <div className="bg-stone-900/70 border-t-2 border-(--color-brand) w-full absolute px-6 bottom-0 left-0 text-gray-200 py-3 translate-y-15 group-hover:-translate-y-[0.4px] flex gap-2 font-semibold text-sm whitespace-nowrap">
      <p>{format(new Date(startDate), "MMM dd yyyy")}</p> <span> - </span>
      <p>{format(new Date(endDate), "MMM dd yyyy")}</p>
    </div>
  );
}

export default JourniTeaserDate;
