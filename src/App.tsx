import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "App.module.scss";
import { meta_types } from "@global_types";
import Home from "pages/Home/Home";
import Question from "pages/Question/Question";
import Loading from "pages/Loading/Loading";
import Result from "pages/Result/Result";

// dummy
import score_data from "dummy/score.json";

export const DataContext = React.createContext<meta_types.userInput | null>(null);
export const ThemeContext = React.createContext<meta_types.userInput["theme"] | null>(null);
// @ts-ignore
const data: meta_types.userInput = {
    type: "SCORE",
    questionItemList: score_data,
    button: "ROUND",
    theme: {
        background: "white",
        accent: "rgb(222, 92, 82)",
        accent_shadow: "rgba(222, 92, 82, 34%)",
    },
    animation: "fade-left",
    layout: "image",
};

function App() {
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
