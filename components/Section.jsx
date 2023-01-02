// wrapper component which provides a full poge view

function Section({ targetId, children }) {
  return (
    <div className="section">
      <div className="container mx-auto">{children}</div>
      {targetId ? <a href={`#${targetId}`}>+</a> : null}
    </div>
  );
}
export default Section;
