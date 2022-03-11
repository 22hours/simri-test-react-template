import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { appData } from "recoil/app";
import style from "./Social.module.scss";

type Props = {};

const social_list = [
  {
    name: "social_kakao",
    img: process.env.PUBLIC_URL + "/assets/img/social_kakao.png",
    link: "#",
  },
  {
    name: "social_facebook",
    img: process.env.PUBLIC_URL + "/assets/img/social_fb.png",
    link: "#",
  },
  {
    name: "social_twitter",
    img: process.env.PUBLIC_URL + "/assets/img/social_twitter.png",
    link: "#",
  },
  {
    name: "social_link",
    img: process.env.PUBLIC_URL + "/assets/img/social_link.png",
    link: "#",
  },
];

const Social = (props: Props) => {
  const { theme } = useRecoilValue(appData);

  return (
    <div className={style.container}>
      <div style={{ color: theme?.accent }} className={style.social_text}>
        친구에게 공유해보세요!
      </div>
      <div className={style.social_list}>
        {social_list.map((it, idx) => (
          <div className={style.social_item}>
            <img src={it.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
