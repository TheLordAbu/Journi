/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useGetJourni } from "./useGetJourni";
import Loader from "../../UI/Loader";
import Carousel from "../../UI/Carousel";
import CountryCode from "./CountryCode";
import Heading from "../../UI/Heading";
import Error from "../../UI/Error";
import Button from "../../UI/Button";

function Journi() {
  const { isLoading, error, journi } = useGetJourni();
  const navigate = useNavigate();
  // const { city, country, description } = journi;
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="w-full journi">
      {/* back to journis */}
      <Button onClick={() => navigate("/journis")}>
        &larr; Back to Journis
      </Button>
      <Carousel />
      <div className="bg-gray-100 shadow flex items-center justify-center">
        <div className="pl-4 flex justify-between w-full items-center font-semibold text-xl rounded-br-md rounded-bl-md overflow-hidden">
          <span>{journi.city}</span>,
          <span className="ml-1">{journi.country}</span>
          <div className="ml-auto bg-brand p-2">
            <CountryCode type="journi" country={journi.country} />
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 rounded-tl-lg rounded-tr-lg mt-6">
        <Heading type="h2">A brief summary about your Journi</Heading>
      </div>
      <div className="bg-gray-50 p-6 rounded-br-md rounded-bl-md columns-2">
        {journi.description}
      </div>
    </div>
  );
}
export default Journi;
