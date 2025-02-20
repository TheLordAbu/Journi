import { useJournis } from "../features/journis/useJournis";
import { useState } from "react";
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
          <div className="flex gap-4">
            <span>Filter</span>
            <span>Sort</span>
            <span onClick={() => setShowForm((showForm) => !showForm)}>
              Add New Cabin
            </span>
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
