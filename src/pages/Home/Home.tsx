import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { appData, appStep } from "recoil/app";
import style from "./Home.module.scss";
type Props = {};

const Home = (props: Props) => {
  const data = useRecoilValue(appData);
  const setStep = useSetRecoilState(appStep);
  const onClickStart = () => setStep("QUESTION");

  if (data) {
    return (
      <div className={style.container} data-aos={"fade-up"}>
        <header className={style.section_logo}>
          <Logo />
        </header>
        <article>
          <section className={style.section_head}>
            <div style={{ color: data.theme.accent }} className={style.title}>
              {data.title}
            </div>
            <div
              style={{ color: data.theme.accent }}
              className={style.subTitle}
            >
              {data.subTitle}
            </div>
          </section>
          <section
            className={style.section_image}
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/img/start_banner.gif"
              }')`,
            }}
          ></section>
          <section className={style.section_btn}>
            <Button onClick={onClickStart}>{data.startText}</Button>
          </section>
        </article>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Home;
