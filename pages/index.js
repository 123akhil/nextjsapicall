import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://reqres.in/api/users/";

export default function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setUsers(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div className="text-center">
      <Head>
        <title>CALLING API</title>
      </Head>
      <h1 className="font-bold text-4xl">Hello ReqRes users!</h1>
      <div className="flex flex-wrap justify-center items-center">
        {users.length &&
          users.map((user) => {
            return (
              <div className="m-4 border-4" key={user.id}>
                <p className="text-xl">
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img
                  className="inline-block mx-auto"
                  key={user.avatar}
                  src={user.avatar}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
