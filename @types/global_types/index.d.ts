//  ./@types/custom-types/index.d.ts
declare module "@global_types" {
    export namespace meta_types {
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
            button: "ROUND" | "SOFT" | "HARD";
            theme: {
                background: string;
                accent: string;
                accent_shadow: string;
            };
            animation: "ZOOM" | "fade-left" | "fade-up";
            layout: "text" | "image" | "video";
        };

        type questionItem = {
            mbti: {
                question: string;
                answerList: { answer: string; point: number[] }[];
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
                answerList: { answer: string; point: boolean }[];
            };
        };
    }
}
