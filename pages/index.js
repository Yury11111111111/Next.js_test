import Link from "next/Link";
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const index = () => {
  return (
    <MainContainer keywords={"Main page"}>
      <div>
        <h1>Главная страница</h1>
      </div>
    </MainContainer>
  );
};

export default index;
