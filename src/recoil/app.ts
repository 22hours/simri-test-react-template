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
    button: "SOFT",
    theme: {
      background: "white",
      accent: "rgb(255, 153, 204)",
      accent_shadow: "rgba(255, 153, 204, 50%)",
    },
    animation: {
      type: "fade-up",
      duration: "1500",
    },
    loading: {
      type: "Circles",
    },
    layout: "text",
    title: "나의 봄나들이 패션스타일은?",
    subTitle: "벚꽃놀이 취향으로 보는 봄패션 MBTI",
    startText: "테스트 시작하기",
  },
});

export const shareData = selector({
  key: "shareData",
  get: ({ get }): ShareData => {
    return {
      title: "나의 봄나들이 패션스타일은?",
      description: "벚꽃놀이 취향으로 보는 봄패션 MBTI",
      imageUrl: window.location.href + "/assets/img/start_banner.png",
    };
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
  descriptList: { title: string; descript: string[] }[];
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
        return resultData[max];
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
