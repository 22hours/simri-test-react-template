//  ./@types/custom-types/index.d.ts

declare module "@global_types" {
  export namespace meta_types {
    type TestType = "MBTI" | "TYPE" | "SCORE" | "OX";
    type userInput =
      | (commonType & {
          type: "MBTI";
          questionItemList: questionItem["mbti"][];
        })
      | (commonType & {
          type: "TYPE";
          questionItemList: questionItem["type"][];
        })
      | (commonType & {
          type: "SCORE";
          questionItemList: questionItem["score"][];
        })
      | (commonType & {
          type: "OX";
          questionItemList: questionItem["ox"][];
        });

    type commonType = {
      title: string;
      subTitle: string;
      startText: string;
      button: "ROUND" | "SOFT" | "HARD";
      theme: {
        background: string;
        accent: string;
        accent_shadow: string;
      };
      animation: {
        type: "zoom" | "fade-left" | "fade-up";
        duration: string;
      };
      layout: "text" | "image" | "video";
      loading: {
        type:
          | "Audio"
          | "BallTriangle"
          | "Bars"
          | "Circles"
          | "Grid"
          | "Hearts"
          | "Oval"
          | "Puff"
          | "Rings"
          | "TailSpin"
          | "ThreeDots"
          | "Watch"
          | "RevolvingDot"
          | "Triangle"
          | "Plane"
          | "MutatingDots"
          | "CradleLoader";
      };
    };

    type questionItem = {
      mbti: {
        question: string;
        answerList: { answer: string; point: number }[];
      };
      type: {
        question: string;
        answerList: { answer: string; point: number[] }[];
      };
      score: {
        question: string;
        answerList: { answer: string; point: number }[];
      };
      ox: {
        question: string;
        answerList: { answer: string; point: number }[];
      };
    };
  }
}
