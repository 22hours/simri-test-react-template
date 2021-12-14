import { DataContext } from "App";
import Button from "components/Button/Button";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { useContext, useEffect, useState } from "react";
import style from "./Question.module.scss";
type Props = {};

const Question = (props: Props) => {
    const data = useContext(DataContext);
    const [step, setStep] = useState(1);
    const [input, setInput] = useState<number[] | number>();

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

    const handleInput = () => {};

    if (data) {
        const currentStepData = data.questionItemList[step - 1];
        return (
            <div className={style.container}>
                <h2>question</h2>
                <ProgressBar />
                <div className={style.answerList}>
                    {currentStepData.answerList.map((it, idx) => (
                        <Button key={`questionitem_${step}_${idx}`} onclick={() => alert("HA")} text={"hi"} />
                    ))}
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Question;
