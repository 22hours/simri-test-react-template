import { ThemeContext } from "App";
import Button from "components/Button/Button";
import Social from "components/Social/Social";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Result.module.scss";
type Props = {};

const Result = (props: Props) => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div
      className={style.container}
      data-aos={"fade-up"}
      data-aos-duartion="1500"
    >
      <section className={style.head}>
        <img
          className={style.head_img}
          src={process.env.PUBLIC_URL + `/assets/img/result_${id}.png`}
        />
      </section>
      <section className={style.result}>
        <div style={{ color: theme?.accent }} className={style.smallTitle}>
          나 멋있어? 쎄보여?
        </div>
        <div style={{ color: theme?.accent }} className={style.mainTitle}>
          돌진 버서커
        </div>
      </section>
      <section className={style.main}></section>
      <section className={style.footer}>
        <Social />
        <Button
          text={"테스트 다시하기"}
          onClick={() => navigate("/", { replace: true })}
        />
      </section>
    </div>
  );
};

export default Result;
