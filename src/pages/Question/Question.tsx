import AnswerList from "components/AnswerList/AnswerList";
import Loading from "components/Loading/Loading";
import Logo from "components/Logo/Logo";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Quiz from "components/Quiz/Quiz";
import QuizFooter from "components/QuizFooter/QuizFooter";
import QuizImage from "components/QuizImage/QuizImage";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { appData, testResult } from "recoil/app";
import style from "./Question.module.scss";
import resultData from "data/result.json";

const Question = () => {
  const data = useRecoilValue(appData);
  const setTestResult = useSetRecoilState(testResult);

  const [step, setStep] = useState(1);
  const [numberInput, setNumberInput] = useState<number[]>([]);
  const [arrayInput, setArrayInput] = useState<number[]>(
    Array(resultData.length).fill(0)
  );

  useEffect(() => {
    if (step === data.questionItemList.length + 1) {
      if (data.type === "SCORE") {
        setTestResult(numberInput);
      } else {
        setTestResult(arrayInput);
      }
    }
  }, [step]);

  const handleAnswer = useCallback((point: number | number[]) => {
    setStep((step) => step + 1);
    if (!Array.isArray(point)) {
      setNumberInput((v) => [...v, point]);
    } else {
      setArrayInput((v) => {
        return point.map((it, idx) => it + v[idx]);
      });
    }
  }, []);

  if (step === data.questionItemList.length + 1) {
    return <Loading />;
  } else {
    const currentStepData = data.questionItemList[step - 1];
    return (
      <div className={style.container}>
        {data.layout === "text" && <Logo />}
        <div className={style.progress_wrapper}>
          <ProgressBar step={step} />
        </div>

        {data.layout !== "text" && (
          <div className={style.quiz_image_wrapper}>
            <QuizImage step={step} mediaType={data.layout} />
          </div>
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
};

export default Question;
