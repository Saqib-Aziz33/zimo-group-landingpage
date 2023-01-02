// wrapper component which provides a full poge view
// and a bottom arrow

import Image from "next/image";

function Section({ targetId, children, className, invertedArrow, ...rest }) {
  return (
    <div className={`section ${className}`} {...rest}>
      <div className="container mx-auto relative">{children}</div>

      {/* down arrow */}
      {targetId ? (
        <a
          className={`navigate-down ${invertedArrow && "invert"}`}
          href={`#${targetId}`}
        >
          <Image height={80} width={40} src="/assets/down-arrow.png" alt="" />
        </a>
      ) : null}
    </div>
  );
}
export default Section;
