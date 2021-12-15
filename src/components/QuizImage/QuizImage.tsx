import { meta_types } from "@global_types";
import { DataContext } from "App";
import React, { useContext } from "react";
import style from "./QuizImage.module.scss";

type Props = {
  step: number;
  mediaType: meta_types.commonType["layout"];
};

const QuizImage = (props: Props) => {
  const data = useContext(DataContext);
  return (
    <>
      {props.mediaType === "image" ? (
        <div
          // style={{
          //   backgroundImage: `url('${
          //     process.env.PUBLIC_URL + `/assets/img/question_${props.step}`
          //   }')`,
          // }}
          className={style.ImageContainer}
        >
          <img
            data-aos={data?.animation.type}
            data-aos-duration={data?.animation.duration}
            src={process.env.PUBLIC_URL + `/assets/img/question_${props.step}`}
          />
        </div>
      ) : (
        <div className={style.ImageContainer}></div>
      )}
    </>
  );
};

export default QuizImage;
