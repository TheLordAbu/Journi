// import { useMoveBack } from "../hooks/useMoveBack";
import Loader from "../../UI/Loader";
import Carousel from "../../UI/Carousel";
import { useGetJourni } from "./useGetJourni";

function Journi() {
  const { isLoading, error, journi } = useGetJourni();
  console.log(journi);
  // const { city, country, description } = journi;
  if (isLoading) return <Loader />;
  return (
    <div className="w-full journi-container">
      <Carousel />
      <div className="bg-gray-100 py-3 px-4"></div>
    </div>
  );
}
export default Journi;
