import { meta_types } from "@global_types";
import Button from "components/Button/Button";
import React, { useState } from "react";
import style from "./AnswerList.module.scss";

type Props = {
  answerList: { answer: string; point: number | number[] }[];
  handleAnswer: (point: number | number[]) => void;
  step: number;
};

const AnswerList = (props: Props) => {
  const [curAnswer, setCurAnswer] = useState<number | null>(null);

  const handleClickAnswer = (idx: number, point: number | number[]) => {
    if (curAnswer === null) {
      setCurAnswer(() => idx);
      setTimeout(() => {
        setCurAnswer(() => null);
        props.handleAnswer(point);
      }, 800);
    }
  };

  return (
    <div className={style.container}>
      {props.answerList.map((it, idx) => {
        if (curAnswer !== null) {
        }
        return (
          <Button
            className={
              curAnswer !== null
                ? curAnswer === idx
                  ? style.on
                  : style.off
                : ""
            }
            key={`questionitem_${props.step}_${idx}`}
            onClick={() => handleClickAnswer(idx, it.point)}
          >
            {it.answer}
          </Button>
        );
      })}
    </div>
  );
};

export default AnswerList;
