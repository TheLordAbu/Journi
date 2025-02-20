import { useJournis } from "../features/journis/useJournis";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Loader from "../UI/Loader";
import Row from "../UI/Row";
import Heading from "../UI/Heading";
import Empty from "../UI/Empty";
import JourniTeaser from "../features/journis/JourniTeaser";
import Container from "../UI/Container";
import CreateJourniForm from "../features/journis/CreateJourniForm";

function Journis() {
  const [showForm, setShowForm] = useState(false);
  const { isLoading, journis } = useJournis();

  if (isLoading) return <Loader />;
  if (!journis.length) return <Empty resourceName="Journis" />;
  return (
    <div className="w-full">
      <Container>
        <Row type="row">
          <Heading>Journis</Heading>
          <div className="flex gap-4 items-center">
            <span>Filter</span>
            <span>Sort</span>
            <button
              onClick={() => setShowForm((showForm) => !showForm)}
              className="flex items-center gap-2 bg-(--color-brand) p-2 rounded text-gray-50 font-semibold tracking-wide cursor-pointer"
            >
              Add New Journi <FaPlus />
            </button>
          </div>
        </Row>
        {showForm && <CreateJourniForm />}
        <ul className=" grid md:grid-cols-2 gap-2">
          {journis.map((journi) => (
            <JourniTeaser key={journi.id} journi={journi} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Journis;
