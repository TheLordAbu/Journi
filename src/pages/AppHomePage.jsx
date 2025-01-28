import Heading from "../UI/Heading";

function AppHomePage() {
  return (
    <div className="w-full">
      <Heading>Welcome to Journi</Heading>
      <div className="border border-gray-200 bg-gray-50 w-full p-4 h-56">
        <Heading type="h2">Dashboard here</Heading>
      </div>
    </div>
  );
}

export default AppHomePage;
