import JourniInfoCard from "../features/journis/JourniInfoCard";
import Heading from "../UI/Heading";

function Journis() {
  const data = [
    { id: 1, Country: "Spain", Town: "Madrid" },
    { id: 2, Country: "Spain", Town: "Barcelona" },
    { id: 3, Country: "Spain", Town: "Tenerife" },
    { id: 4, Country: "Spain", Town: "Sitges" },
  ];

  return (
    <div className="w-full">
      <Heading>Journis</Heading>
      <ul>
        {data.map((journi) => (
          <JourniInfoCard key={journi.id} journi={journi} />
        ))}
      </ul>
    </div>
  );
}

export default Journis;
