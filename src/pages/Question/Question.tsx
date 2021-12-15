import { DataContext } from "App";
import AnswerList from "components/AnswerList/AnswerList";
import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";
import Logo from "components/Logo/Logo";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Quiz from "components/Quiz/Quiz";
import QuizFooter from "components/QuizFooter/QuizFooter";
import QuizImage from "components/QuizImage/QuizImage";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import style from "./Question.module.scss";
type Props = {};

const Question = (props: Props) => {
  const data = useContext(DataContext);
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<number[] | number>(0);

  useEffect(() => {
    if (data) {
      switch (data.type) {
        case "MBTI" || "TYPE":
          setInput(new Array(data.questionItemList.length).fill(0));
          break;
        case "SCORE":
          setInput(0);
          break;
        case "OX":
          setInput(0);
          break;
      }
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (step === data.questionItemList.length - 1) {
        // 종료 조건
      }
    }
  }, [step]);

  const handleAnswer = useCallback((point: number | number[]) => {
    if (!data) {
      return;
    }
    setStep((step) => step + 1);
    switch (data?.type) {
      case "MBTI" || "TYPE": {
        // @ts-ignore
        const newInput = input.map((it, idx) => {
          // @ts-ignore
          return it + point[idx];
        });
        setInput(newInput);
        break;
      }
      case "SCORE": {
        // @ts-ignore
        const newInput = input + point;
        setInput(newInput);
        break;
      }
      case "OX": {
        // @ts-ignore
        const newInput = input + point;
        setInput(newInput);
        break;
      }
    }
  }, []);

  const maxStep = useMemo(() => data && data.questionItemList.length, [data]);

  if (data) {
    // 종료
    if (step === data.questionItemList.length + 1) {
      return <Loading />;
    } else {
      const currentStepData = data.questionItemList[step - 1];
      return (
        <div className={style.container}>
          {data.layout === "text" && <Logo />}
          <ProgressBar step={step} maxStep={maxStep || 0} />
          {data.layout !== "text" && (
            <QuizImage step={step} mediaType={data.layout} />
          )}
          <Quiz step={step} question={currentStepData.question} />
          <AnswerList
            step={step}
            answerList={currentStepData.answerList}
            handleAnswer={handleAnswer}
          />
          <QuizFooter />
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default Question;
