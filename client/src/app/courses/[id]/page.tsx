"use client";

import BackgroundLayout from "@/layouts/background.layout";

import ArrowIcon from "@/assets/icons/arrow";
import { PrimaryButton } from "@/components/ui/buttons.ui";
import DoneIcon from "@/assets/icons/done";

import { useParams } from "next/navigation";

import courseDB from "@/db/courses.json";
import Link from "next/link";

export default function Course() {
  const { courses } = courseDB;
  const { id } = useParams();
  const currentCourse = courses.find((x) => x.uid === Number(id));

  return (
    <BackgroundLayout src="/videos/welcome.mp4">
      <div className="flex items-center gap-2 cursor-pointer">
        <ArrowIcon />
        <h3 className="text-white">Back</h3>
      </div>
      <div className="w-fill flex flex-col items-end gap-20">
        <div className="w-full text-center flex flex-col  gap-20">
          <h3 className="text-white font-bold text-2xl">
            {currentCourse?.title}
          </h3>
          <p className="text-white leading-relaxed text-2xl">
            {currentCourse?.explanation}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/courses/${id}/missions`}>
            <PrimaryButton className="w-fit">
              <div className="flex gap-2">
                <DoneIcon />
                start mission
              </div>
            </PrimaryButton>
          </Link>
          <Link href={`/courses/${id}/quizz`}>
            <PrimaryButton className="w-fit">
              <div className="flex gap-2">
                <DoneIcon />
                Practice for mission
              </div>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
}
