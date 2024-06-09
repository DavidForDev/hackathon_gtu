"use client";

import { useState } from "react";

// -------------- Layouts ---------------  //
import BackgroundLayout from "@/layouts/background.layout";

// -------------- UI ---------------  //
import { PrimaryButton } from "@/components/ui/buttons.ui";
import { PrimaryInput } from "@/components/ui/input.ui";
import FormSlide from "@/layouts/form";
import FormCard from "@/layouts/form/_components/card.layout";

import Apollo from "@/apollo/apollo";
import gql from "graphql-tag";

import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const cookies = new Cookies();
  const router = useRouter();

  const signInHandle = async () => {
    if (!email || !password) {
      return;
    }

    const query = gql`
      query Query($userLogin: UserLogin) {
        signIn(userLogin: $userLogin) {
          data
          message
          status
        }
      }
    `;

    const { data } = await Apollo.query({
      query,
      variables: {
        userLogin: {
          email: email,
          password: password,
        },
      },
    });

    const token = data.signIn.data.token;

    cookies.set("token", token.token, { path: "/" });

    router.refresh();
  };

  return (
    <BackgroundLayout src="/videos/bgg.mp4">
      <div className="flex w-full max-w-2xl h-full m-auto justify-center flex-col gap-7">
        <FormCard
          onChange={(el) => setEmail(el.target.value)}
          placeholder="email"
          type="text"
          label="First, I want to know your Email"
        />
        <FormCard
          onChange={(el) => setPassword(el.target.value)}
          placeholder="password"
          type="password"
          label="Finally, I want to know your Password"
        />
        <PrimaryButton className="w-full" onClick={signInHandle}>
          Start
        </PrimaryButton>
      </div>
    </BackgroundLayout>
  );
}
