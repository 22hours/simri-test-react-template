import { DataContext } from "App";
import React, { useContext, useMemo } from "react";
import style from "./Button.module.scss";

type Props = {
  onClick: () => void;
  text: string;
  className?: string;
};

const Button = (props: Props) => {
  const data = useContext(DataContext);
  // @ts-ignore
  const { theme, button, animation } = data;
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
  if (data) {
    return (
      <div
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
          <div className={style.text}>{props.text}</div>
        </div>
      </div>
    );
  } else {
    return <div>Loading for data</div>;
  }
};

export default React.memo(Button);
