import React from "react";
import ButtonGreadient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGreadient />
    </>
  );
};

export default App;
// 5:18
