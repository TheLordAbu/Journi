import Heading from "../UI/Heading";
import Stats from "../UI/Stats";

function AppHomePage() {
  return (
    <div className="w-full">
      <Heading>Welcome to your Journi Dashboard</Heading>
      <div className="border border-gray-200 w-full p-4 h-56">
        <Heading type="h3">
          Here&apos;s an overview your journies so far
        </Heading>
        <div className="grid grid-cols-4 gap-4 my-4">
          <Stats />
          <Stats />
          <Stats />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default AppHomePage;
