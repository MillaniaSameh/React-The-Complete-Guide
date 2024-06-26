import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.jsx";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth.js";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "POST" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
