import React from "react";
import Head from "next/head";
import A from "./A";
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>{keywords}</title>
      </Head>
      <nav>
        <A text={"Главная"} href={"/"} />
        <A text={"Пользователи"} href={"/users"} />
      </nav>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
