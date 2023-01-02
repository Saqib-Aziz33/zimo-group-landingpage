// wrapper component which provides a full poge view
// and a bottom arrow
import { Link } from "react-scroll";

import Image from "next/image";

function Section({ targetId, children, className, invertedArrow, ...rest }) {
  return (
    <div className={`section ${className ? className : ""}`} {...rest}>
      {/* <div className="container mx-auto relative"></div> */}
      {children}
      {/* down arrow */}
      {targetId ? (
        <Link
          to={targetId}
          className={`navigate-down ${invertedArrow && "invert"}`}
          href={`#${targetId}`}
        >
          <Image height={80} width={40} src="/assets/down-arrow.png" alt="" />
        </Link>
      ) : null}
    </div>
  );
}
export default Section;
