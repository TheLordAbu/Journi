// import { useMoveBack } from "../hooks/useMoveBack";
import { useGetJourni } from "./useGetJourni";
import Loader from "../../UI/Loader";
import Carousel from "../../UI/Carousel";
import CountryCode from "./CountryCode";
import Error from "../../pages/Error";

function Journi() {
  const { isLoading, error, journi } = useGetJourni();
  console.log(journi);
  // const { city, country, description } = journi;
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="w-full journi">
      <Carousel />
      <div className="bg-gray-100  shadow flex">
        <span>{journi.city}</span>, <span>{journi.country}</span>{" "}
        <div className="ml-auto bg-stone-900/60 px-2 flex items-center justify-center">
          <CountryCode country={journi.country} />
        </div>
      </div>
    </div>
  );
}
export default Journi;
