import { ReactNode, useState } from "react";

const Btn = ({
  children,
  textcolor,
  color,
  hovercolor,
}: {
  children: ReactNode;
  textcolor: string;
  color: string;
  hovercolor: string;
}) => {
  const [_hover, _setHover] = useState(false);
  return (
    <div
      style={{
        color: textcolor,
        backgroundColor: _hover ? hovercolor : color,
      }}
      onMouseOver={() => {
        _setHover(true);
      }}
      onMouseLeave={() => {
        _setHover(false);
      }}
      className={` cursor-pointer justify-center rounded-md flex items-center px-3 py-3`}
    >
      {children}
    </div>
  );
};

export default Btn;
