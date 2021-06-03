import React from "react";

import '../../styles/CustomAccordian.scss';


interface AccordianProps {
  title : string,
  children : React.ReactNode
  classProp : string
}



export const Accordion = ({ title, children , classProp } : AccordianProps) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}  ${classProp}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
