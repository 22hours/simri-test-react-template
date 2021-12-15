import { ThemeContext } from "App";
import { useContext } from "react";
import style from "./ProgressBar.module.scss";
type Props = {
  step: number;
  maxStep: number;
};

const ProgressBar = (props: Props) => {
  const theme = useContext(ThemeContext);

  const width = ((props.step - 1) / props.maxStep) * 100;
  return (
    <>
      <div className={style.ProgressText}>
        <span className={style.now}>{props.step}</span>
        <span className={style.total}>/ {props.maxStep}</span>
      </div>
      <div className={style.ProgressBar}>
        <div className={style.inner}>
          <div
            className={style.progress}
            style={{
              backgroundColor: theme?.accent,
              width: `${width}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
