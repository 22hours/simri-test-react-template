import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { appData } from "recoil/app";
import style from "./Quiz.module.scss";

type Props = {
  step: number;
  question: string;
};

const Quiz = (props: Props) => {
  const { theme } = useRecoilValue(appData);
  return (
    <div className={style.container}>
      <div className={style.QuizCount}>
        <div className={style.text} style={{ color: `${theme?.accent}` }}>
          Q{props.step}.
        </div>
      </div>
      <div className={style.QuizText}>
        <div className={style.text}>{props.question}</div>
      </div>
    </div>
  );
};

export default Quiz;
