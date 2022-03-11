import { meta_types } from "@global_types";
import { useRecoilValue } from "recoil";
import { appData } from "recoil/app";
import style from "./QuizImage.module.scss";

type Props = {
  step: number;
  mediaType: meta_types.commonType["layout"];
};

const QuizImage = (props: Props) => {
  return (
    <>
      {props.mediaType === "image" ? (
        <div className={style.ImageContainer}>
          <img
            src={process.env.PUBLIC_URL + `/assets/img/Q${props.step}.png`}
          />
        </div>
      ) : (
        <div className={style.ImageContainer}></div>
      )}
    </>
  );
};

export default QuizImage;
