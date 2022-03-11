import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { appData } from "recoil/app";
import style from "./ProgressBar.module.scss";
type Props = {
  step: number;
};

const ProgressBar = (props: Props) => {
  const data = useRecoilValue(appData);
  const maxStep = useMemo(() => data && data.questionItemList.length, [data]);
  const width = ((props.step - 1) / maxStep) * 100;
  return (
    <>
      <div className={style.ProgressText}>
        <span className={style.now}>{props.step}</span>
        <span className={style.total}>/ {maxStep}</span>
      </div>
      <div className={style.ProgressBar}>
        <div className={style.inner}>
          <div
            className={style.progress}
            style={{
              backgroundColor: data.theme?.accent,
              width: `${width}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
