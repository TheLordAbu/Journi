/* eslint-disable react/prop-types */
function Logo({ type }) {
  const src = "/earth.png";
  if (type == "small")
    return (
      <div className="w-full px-6 my-8">
        <img className="h-20 w-auto object-fill" src={src} alt="Logo" />
        <h1 className="font-extrabold text-3xl italic mt-2 text-gray-200">
          Journi
        </h1>
      </div>
    );
  return (
    <div className="flex flex-col place-items-center">
      <img className="h-36 w-auto object-fill" src={src} alt="Logo" />
      <h1 className="font-extrabold text-[60px] italic">Journi</h1>
      <p className="italic font-semibold text-xl">
        Your very own travel journal
      </p>
    </div>
  );
}

export default Logo;
