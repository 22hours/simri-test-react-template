import { DataContext } from "App";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.scss";
type Props = {};

const Home = (props: Props) => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  if (data) {
    return (
      <div className={style.container} data-aos={"fade-up"}>
        <header className={style.LogoSection}>
          <Logo />
        </header>
        <article>
          <section className={style.HeadSection}>
            <div style={{ color: data.theme.accent }} className={style.title}>
              {data.title}
            </div>
            <div className={style.subTitle}>{data.subTitle}</div>
          </section>
          <section
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/img/start_banner.png"
              }')`,
            }}
            className={style.ImageSection}
          ></section>
          <section className={style.BtnSection}>
            <Button
              text={data.startText}
              onClick={() => {
                navigate("/question");
              }}
            />
          </section>
        </article>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Home;
