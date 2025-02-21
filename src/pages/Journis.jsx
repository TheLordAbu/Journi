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
import Button from "../UI/Button";

function Journis() {
  const [showForm, setShowForm] = useState(false);
  const { isLoading, journis } = useJournis();

  if (isLoading) return <Loader />;
  return (
    <div className="w-full">
      <Container>
        <Row type="row">
          <Heading>Journis</Heading>
          <div className="flex gap-4 items-center">
            <span>Filter</span>
            <span>Sort</span>
            <Button
              type="icon"
              onClick={() => setShowForm((showForm) => !showForm)}
            >
              Add New Journi {<FaPlus />}
            </Button>
          </div>
        </Row>
        {showForm && <CreateJourniForm />}
        {!journis.length && <Empty resourceName="Journis" />}
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
