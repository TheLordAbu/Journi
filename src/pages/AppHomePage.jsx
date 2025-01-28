import Heading from "../UI/Heading";
import Stats from "../UI/Stats";

function AppHomePage() {
  return (
    <div className="w-full">
      <Heading>Welcome to Journi</Heading>
      <div className="border border-gray-200 bg-gray-50 w-full p-4 h-56">
        <Heading type="h3">
          Here&apos;s an overview your journies so far
        </Heading>
        <div className="grid grid-cols-4">
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
