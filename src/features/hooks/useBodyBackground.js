export default function useBodyBackground(image) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundColor: "rgba(235, 47, 100, 1)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  Object.assign(document.body.style, bgStyle);
}
