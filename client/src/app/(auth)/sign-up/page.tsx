"use client";

import { useState } from "react";
import Cookies from "universal-cookie";

// -------------- Layouts ---------------  //
import BackgroundLayout from "@/layouts/background.layout";
import FormSlide from "@/layouts/form";
import FormCard from "@/layouts/form/_components/card.layout";

import client from "@/apollo/apollo";
import gql from "graphql-tag";
import { PrimaryButton } from "@/components/ui/buttons.ui";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const cookie = new Cookies();
  const router = useRouter();

  const signUpHandle = async () => {
    const mutation = gql`
      mutation Mutation($userRegistration: UserRegistration) {
        createUser(userRegistration: $userRegistration) {
          data
          message
          status
        }
      }
    `;
    const { data } = await client.mutate({
      mutation,
      variables: {
        userRegistration: {
          userName: username,
          email: email,
          password: password,
        },
      },
    });

    const token = data.createUser.data.token;

    cookie.set("token", token.token, { path: "/" });

    router.refresh();
  };

  return (
    <BackgroundLayout src="/videos/bgg.mp4">
      <div className="flex h-full w-full items-center justify-center flex-col">
        <FormCard
          onChange={(el) => setUsername(el.target.value)}
          placeholder="username"
          type="text"
          label="First, we want to know your Name"
        />
        <FormCard
          onChange={(el) => setEmail(el.target.value)}
          placeholder="email"
          type="text"
          label="Next, I want to know your Email"
        />
        <FormCard
          onChange={(el) => setPassword(el.target.value)}
          placeholder="password"
          type="password"
          label="Finally, I want to know your Password"
        />
        <PrimaryButton className="w-full" onClick={signUpHandle}>
          Sign up
        </PrimaryButton>
      </div>
    </BackgroundLayout>
  );
}
