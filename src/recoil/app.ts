import { meta_types } from "@global_types";
import { atom, selector } from "recoil";

// data
import questionData from "data/question.json";
import resultData from "data/result.json";

type AppStep = "LANDING" | "QUESTION" | "RESULT";

export const appStep = atom<AppStep>({
  key: "appStep",
  default: "LANDING",
});

export const appData = atom<meta_types.userInput>({
  key: "appData",
  default: {
    type: "TYPE",
    questionItemList: questionData,
    button: "ROUND",
    theme: {
      background: "white",
      accent: "rgb(30, 43, 107)",
      accent_shadow: "rgba(30, 43, 107, 50%)",
    },
    animation: {
      type: "fade-up",
      duration: "1500",
    },
    loading: {
      type: "Circles",
    },
    layout: "text",
    title: "덕업일치 자가테스트",
    subTitle: "내 인생의 덕업일치 상태는 어떨까?",
    startText: "> 시작하기",
  },
});

export const testResult = atom<number[]>({
  key: "testData",
  default: [],
});

interface Result {
  id: number;
  result: string;
  min: number;
  max: number;
  summary: string;
  descript: string[];
}

export const testResultSelector = selector({
  key: "testResultSelector",
  get: ({ get }): Result => {
    const { type } = get(appData);
    const resultArray = get(testResult);
    switch (type) {
      case "TYPE":
      case "MBTI": {
        const max = resultArray.indexOf(Math.max(...resultArray));
        return resultData[max + 1];
      }
      case "SCORE":
      case "OX": {
        const sum = resultArray.reduce((acc, a) => acc + a, 0);
        let res = null;
        resultData.forEach((it) => {
          if (it.min <= sum && sum <= it.max) {
            res = it;
            return it;
          }
        });
        return res as unknown as Result;
      }
      default: {
        return resultData[0];
      }
    }
  },
});

interface ShareData {
  title: string;
  description: string;
  imageUrl: string;
}

export const shareData = selector({
  key: "shareData",
  get: ({ get }): ShareData => {
    return {
      title: "덕업일치 자가테스트",
      description: "덕업일치 자가테스트 내 인생의 덕업일치 상태는 어떨까?",
      imageUrl: window.location.href + "/assets/img/start_banner.png",
    };
  },
});
