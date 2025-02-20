import Heading from "../UI/Heading";
import Stats from "../UI/Stats";
import Container from "../UI/Container";

function AppHomePage() {
  return (
    <div className="w-full">
      <Container>
        <Heading>Welcome to your Journi Dashboard</Heading>
        <div className="w-full p-4 md:h-56">
          <Heading type="h3">
            Here&apos;s an overview your journies so far
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <Stats />
            <Stats />
            <Stats />
            <Stats />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AppHomePage;
