function Carousel() {
  const images = [
    "/shaq01.JPG",
    "/shaq02.JPG",
    "/shaq03.JPG",
    "/shaq04.JPG",
    "/shaq05.JPG",
    "/shaq06.JPG",
    "/shaq07.JPG",
    "/shaq08.JPG",
  ];
  return (
    <div className="w-full h-[30rem] bg-white overflow-x-scroll flex relative">
      {images &&
        images.map((img) => (
          <img src={img} key={img} className="object-cover w-[50%] h-full" />
        ))}
    </div>
  );
}

export default Carousel;
