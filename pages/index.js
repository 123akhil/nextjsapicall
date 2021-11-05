import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

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
    <div className="text-center items-center content-center bg-gray-200">
      <Head>
        <title>CALLING API</title>
      </Head>
      <h1 className="font-bold text-4xl">Hello ReqRes users!</h1>

      <div className="flex flex-wrap justify-center items-center">
        {users.length &&
          users.map((user) => {
            return (
              <div
                className="flex flex-col bg-white border-2 border-solid box-border border-black h-64 m-4 p-2 w-52"
                key={user.id}
              >
                <img
                  className="inline-block mx-auto"
                  key={user.avatar}
                  src={user.avatar}
                />
                <p className="text-xl">
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>

                <div className="flex justify-between mt-4 ">
                  <button className="bg-blue-600 px-3 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ...">
                    Update
                  </button>
                  <button className="bg-red-600 px-3 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 ...">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        <div className="h-64 w-52">
          <PlusCircleIcon className="content-center h-20 mx-16 my-16 cursor-pointer text-gray-400 hover:text-gray-600 ." />
        </div>
      </div>
    </div>
  );
}
