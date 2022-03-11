import React, { ReactNode, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { appData } from "recoil/app";
import style from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  id?: string;
};

const Button = (props: Props) => {
  const { theme, button, animation } = useRecoilValue(appData);
  // @ts-ignore
  const buttonBorder = useMemo(() => {
    switch (button) {
      case "ROUND":
        return 28;
      case "SOFT":
        return 12;
      case "HARD":
        return 0;
    }
  }, [button]);
  return (
    <div
      id={props.id}
      data-aos={animation.type}
      data-aos-duration={animation.duration}
      className={[style.outter].join(" ")}
    >
      <div
        onClick={props.onClick}
        className={[style.inner, props.className].join(" ")}
        style={{
          borderRadius: `${buttonBorder}px`,
          background: `${theme?.accent}`,
          boxShadow: `${theme?.accent_shadow} 0px 5px 20px`,
        }}
      >
        <div className={style.text}>{props.children}</div>
      </div>
    </div>
  );
};

export default React.memo(Button);
