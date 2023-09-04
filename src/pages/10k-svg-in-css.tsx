export default function SVGInCSSPage() {
  return (
    <div>
      {Array(10000)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="icon icon-home" />
        ))}
    </div>
  );
}
