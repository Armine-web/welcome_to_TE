import { useState } from "react";


export const HoverBlock = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};



export const Block1 = (props) => (
  <HoverBlock mouseEnterCallbak={props.mouseEnterCallbak}>
    <img src={props.imgSrc} alt={props.imgAlt} />
  </HoverBlock>
);

export const Block2 = (props) => (
  <HoverBlock mouseEnterCallbak={props.mouseEnterCallbak}>
    <p>{props.content}</p>
  </HoverBlock>
);

export const Block3 = (props) => (
  <HoverBlock mouseEnterCallbak={props.mouseEnterCallbak}>
    <address>
      country: {props.userData.country}, street: {props.userData.street}
    </address>
  </HoverBlock>
);

