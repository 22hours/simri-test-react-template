import Button from "components/Button/Button";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { shareData, testResultSelector } from "recoil/app";
import style from "./KakaoBtn.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const KakaoBtn = (props: Props) => {
  const data = useRecoilValue(shareData);
  const testResult = useRecoilValue(testResultSelector);

  useEffect(() => {
    createKakaoButton();
  }, []);

  console.log(
    `https://iamcompany.web.app/assets/img/result${testResult.id}.png`
  );

  const createKakaoButton = () => {
    // @ts-ignore
    if (window.Kakao) {
      // @ts-ignore
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
      }

      kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: testResult.result,
          description: data.description,
          imageUrl: `https://iamcompany.web.app/assets/img/result${testResult.id}.png`,
          link: {
            mobileWebUrl: "https://iamcompany.web.app",
            webUrl: "https://iamcompany.web.app",
          },
        },
        buttons: [
          {
            title: "결과보기",
            link: {
              mobileWebUrl:
                "https://iamcompany.web.app" + `?result=${testResult.id}`,
              webUrl: "https://iamcompany.web.app" + `?result=${testResult.id}`,
            },
          },
          {
            title: "테스트하기",
            link: {
              mobileWebUrl: "https://iamcompany.web.app",
              webUrl: "https://iamcompany.web.app",
            },
          },
        ],
      });
    }
  };
  return (
    <Button onClick={() => {}} id="kakao-link-btn">
      {"공유하기"}
    </Button>
  );
};

export default KakaoBtn;
