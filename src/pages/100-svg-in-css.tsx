export default function SVGInCSSPage() {
  return (
    <div>
      {Array(100)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="icon icon-home" />
        ))}
    </div>
  );
}
