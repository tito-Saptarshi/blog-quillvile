import AccountProfile from "@/components/forms/AccountProfile";
import { createUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { log } from "console";
import React from "react";
async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // console.log("user details");
  // console.log(user.id);
  // console.log(user.username);

  // console.log(user);

  const userData = {
    id: user?.id,
    username: ""
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-3xl m-auto">Onboarding page</h1>
      <div className="mt-28 bg-dark-2 p-10">
        <AccountProfile user={userData}/>
      </div>
    </main>
  );
}
export default Page;
