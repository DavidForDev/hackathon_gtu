"use client";

import { useState } from "react";

// -------------- Layouts ---------------  //
import BackgroundLayout from "@/layouts/background.layout";

// -------------- Icons ---------------  //
import DoneIcon from "../assets/icons/done";

// -------------- UI ---------------  //
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons.ui";
import { PrimaryInput } from "@/components/ui/input.ui";
import FormSlide from "@/layouts/form";
import FormCard from "@/layouts/form/_components/card.layout";

// -------------- Components ---------------  //
import Navigation from "@/components/navigation";
import Dialogs from "@/components/dialog";

// -------------- Images ---------------  //
import General from "../assets/images/general.png";
import { useUserContext } from "@/contexts/user.context";
import Link from "next/link";

export default function Home() {
  const dialogData = [
    {
      description:
        "Welcome, Brave Defender! You have been chosen to embark on a perilous journey to save Earth from the alien invaders.",
      character: General,
    },
  ];

  const { user } = useUserContext();

  return (
    <BackgroundLayout src="/videos/welcome.mp4">
      <div className="flex flex-col gap-20">
        <div className="w-full flex items-center">
          <Navigation />
          {/* <h3 className="text-white font-bold capitalize">{user.username}</h3> */}
        </div>
        <div className="w-full h-full flex gap-12 flex-col justify-center items-center">
          <p className="text-white max-w-6xl w-full  m-auto text-5xl leading-relaxed text-center">
            brave guard! The Earth Defense Force has invited you to join our
            elite team in the fight against the cunning and evil aliens that
            threaten our planet. Get ready for an intergalactic adventure with
            challenges and lots of SQL action!
          </p>
          <Link href="/courses">
            <SecondaryButton>
              <DoneIcon />
              Start Battle!
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
}
