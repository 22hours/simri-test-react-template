import { DataContext } from "App";
import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import style from "./Loading.module.scss";

type Props = {};

const Loading = (props: Props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/result/1");
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
