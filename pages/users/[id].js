import { useRouter } from "next/router";
import Head from "next/head";
import stules from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={query.id + " User page"}>
      <div className={stules.user}>
        <h1>Пользователь с id {query.id}</h1>
        <div>Имя пользователя {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
