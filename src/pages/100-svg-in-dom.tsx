import HomeIcon from "assets/home.svg";

export default function SVGInDOMPage() {
  return (
    <div>
      {Array(100)
        .fill(0)
        .map((_, idx) => (
          <HomeIcon key={idx} width={24} height={24} />
        ))}
    </div>
  );
}
