import Button from "components/Button/Button";
import KakaoBtn from "components/KakaoBtn/KakaoBtn";
import { getCTALink } from "lib/cta";
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
      postTestResult(resultData.id);
    }
  }, []);

  return (
    <div
      className={style.container}
      data-aos={"fade-up"}
      data-aos-duartion="1500"
    >
      <section className={style.section_image}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/result_${resultData.id}.gif`}
        />
      </section>
      <section className={style.section_body}>
        <div className={style.result_inner}>
          <div className={style.summary}>{resultData.summary}</div>
          <div style={{ color: theme?.accent }} className={style.mainTitle}>
            {resultData.result}
          </div>

          <div className={style.descript_wrapper}>
            {resultData.descriptList.map((it, m_idx) => (
              <div key={`descript_panel_1`} className={style.descript_item}>
                <div
                  style={{ color: theme?.accent }}
                  className={style.item_title}
                >
                  {it.title}
                </div>
                <div className={style.descript}>
                  {it.descript.map((it, c_idx) => (
                    <div key={`result-descript-${m_idx}-${c_idx}`}>{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <div className={style.descript_wrapper}>
            {resultData.descriptList.map((it, idx) => (
              <div className={style.descript} key={`descript_${idx}`}>
                - {it}
              </div>
            ))}
          </div> */}
          <section className={style.cta}>
            <Button
              onClick={() => (window.location.href = getCTALink(resultData.id))}
            >
              {"더 다양한 추천 스타일 보러가기"}
            </Button>
          </section>
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
