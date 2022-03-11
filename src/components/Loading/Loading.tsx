import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { appData, appStep } from "recoil/app";
import style from "./Loading.module.scss";

type Props = {};

const Loading = (props: Props) => {
  const data = useRecoilValue(appData);
  const setStep = useSetRecoilState(appStep);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setStep("RESULT");
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <div
      data-aos={"zoom-in-up"}
      data-aos-duration={1500}
      className={style.conatiner}
    >
      {isSuccess ? (
        <div className={style.SuccessContainer}>
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            src={process.env.PUBLIC_URL + "/assets/img/success.png"}
          />
          <p>결과 계산이 완료되었습니다</p>
        </div>
      ) : (
        <>
          <Loader
            type={data?.loading.type || "Audio"}
            color={data?.theme.accent}
            secondaryColor={data?.theme.accent_shadow}
            height={100}
            width={100}
          />
          <div className={style.loading_text}>결과를 계산하고 있습니다</div>
        </>
      )}
    </div>
  );
};

export default Loading;
