import Button from "components/Button/Button";
import KakaoBtn from "components/KakaoBtn/KakaoBtn";
import { postTestResult } from "lib/db";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { appData, testResultSelector } from "recoil/app";
import style from "./Result.module.scss";

type Props = {};

const Result = (props: Props) => {
  const { theme } = useRecoilValue(appData);
  const resultData = useRecoilValue(testResultSelector);
  const onClickRestart = useCallback(() => {
    window.location.href = window.location.origin;
  }, []);

  useEffect(() => {
    if (window.location.search === "") {
      // postTestResult(resultData.id);
    }
  }, []);

  return (
    <div
      className={style.container}
      data-aos={"fade-up"}
      data-aos-duartion="1500"
    >
      <section className={style.section_image}></section>
      <section className={style.section_body}></section>
      <section className={style.result}>
        <div className={style.result_inner}>
          <div style={{ color: theme?.accent }} className={style.mainTitle}>
            {resultData.result}
          </div>
          <div className={style.summary}>"{resultData.summary}"</div>
          <div className={style.descript_wrapper}>
            {resultData.descript.map((it, idx) => (
              <div className={style.descript} key={`descript_${idx}`}>
                - {it}
              </div>
            ))}
          </div>
          <section className={style.footer}>
            <Button onClick={onClickRestart}>{"다시하기"}</Button>
            <KakaoBtn />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Result;
