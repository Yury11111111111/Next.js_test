import { useEffect, useState } from "react";
import Link from "next/Link";
import MainContainer from "../components/MainContainer";

const users = ({ users }) => {
  return (
    <MainContainer keywords={"Users page"}>
      <div>
        <h1>Cписок пользователей</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
