import Home from "pages/Home/Home";
import Question from "pages/Question/Question";
import Result from "pages/Result/Result";
import React, { useEffect } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { appData, appStep, testResult } from "recoil/app";
import result from "data/result.json";
import question from "data/question.json";

type Props = {};

// COMPONENT

const AppRouter = (props: Props) => {
  const data = useRecoilValue(appData);
  const step = useRecoilValue(appStep);

  useEffect(() => {
    checkParams();
  }, []);

  const checkParams = useRecoilCallback(({ set }) => () => {
    if (window.location.search) {
      const params = window.location.search.split("?")[1];
      const resultSplit = params.split("result=")[1];
      if (resultSplit) {
        const resultValue: number = parseInt(resultSplit.split("&")[0]);

        if (1 <= resultValue && resultValue <= result.length) {
          if (data.type === "SCORE") {
            const resultArr = new Array(question.length).fill(
              1,
              0,
              //@ts-ignore
              parseInt(result.find((it) => it.id === resultValue)?.min) + 1
            );
            set(testResult, resultArr);
            set(appStep, "RESULT");
          } else {
            const resultArr = new Array(result.length).fill(0);
            resultArr[resultValue - 1] = 100;
            set(testResult, resultArr);
            set(appStep, "RESULT");
          }
        }
      }
    }
  });

  switch (step) {
    case "LANDING":
      return <Home />;
    case "QUESTION":
      return <Question />;
    case "RESULT":
      return <Result />;
  }
};

export default AppRouter;
