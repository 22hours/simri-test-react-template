import React, { createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "App.module.scss";
import { meta_types } from "@global_types";
import Home from "pages/Home/Home";
import Question from "pages/Question/Question";
import Loading from "pages/Loading/Loading";
import Result from "pages/Result/Result";
import "aos/dist/aos.css";
import Loader from "react-loader-spinner";

// dummy
import score_data from "dummy/score.json";
import Aos from "aos";

export const DataContext = React.createContext<meta_types.userInput | null>(
  null
);
export const ThemeContext = React.createContext<
  meta_types.userInput["theme"] | null
>(null);
// @ts-ignore
const data: meta_types.userInput = {
  type: "SCORE",
  questionItemList: score_data,
  button: "SOFT",
  theme: {
    background: "white",
    accent: "rgb(63, 157, 255)",
    accent_shadow: "rgba(63, 157, 255, 34%)",
  },
  animation: {
    type: "fade-left",
    duration: "1500",
  },
  loading: {
    type: "Circles",
  },
  layout: "text",

  title: "심리 테스트를 잘 만드는 방법은 !!!!!?",
  subTitle: "심리테스트를 잘 만드는 22HOURS의 대 모험",
  startText: "테스트 고고씽!",
};

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: -10,
    });
  });
  return (
    <DataContext.Provider value={data}>
      <ThemeContext.Provider value={data.theme}>
        <BrowserRouter>
          <main className={style.main}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/question"} element={<Question />} />
              <Route path={"/loading"} element={<Loading />} />
              <Route path={"/result/:id"} element={<Result />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
