import { useJournis } from "../features/journis/useJournis";
import { FaPlus } from "react-icons/fa6";
import Loader from "../UI/Loader";
import Row from "../UI/Row";
import Heading from "../UI/Heading";
import Empty from "../UI/Empty";
import JourniTeaser from "../features/journis/JourniTeaser";
import Container from "../UI/Container";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import AddJourni from "../features/journis/AddJourni";
import CreateJourniForm from "../features/journis/CreateJourniForm";

function Journis() {
  const { isLoading, journis } = useJournis();

  if (isLoading) return <Loader />;
  return (
    <div className="w-full">
      <Container>
        <Modal>
          <Row type="row">
            <Heading>Journis</Heading>
            <div className="flex gap-4 items-center">
              <span>Filter</span>
              <span>Sort</span>
              <Modal.Open opens="journi-form">
                <Button type="icon">Add New Journi {<FaPlus />}</Button>
              </Modal.Open>
            </div>
          </Row>
          <AddJourni />
        </Modal>
        {!journis.length && <Empty resourceName="Journis" />}
        <ul className=" grid md:grid-cols-3 gap-2">
          {journis.map((journi) => (
            <>
              <Modal>
                <Modal.Window name="edit">
                  <CreateJourniForm journiToEdit={journi} />
                </Modal.Window>
                <JourniTeaser key={journi.id} journi={journi} />
              </Modal>
            </>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Journis;
