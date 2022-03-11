import React, { createContext, ReactNode, useEffect, useState } from "react";
import style from "App.module.scss";
import "aos/dist/aos.css";

// dummy
import Aos from "aos";
import AppRouter from "AppRouter";
import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
