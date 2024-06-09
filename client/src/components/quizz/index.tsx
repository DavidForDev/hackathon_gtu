"use client";

import Image from "next/image";

import quizzImage from "@/assets/images/quizz.png";
import QuizCard from "@/components/quizz/_components/quizCard";
import quizzDB from "@/db/quizz.json";
import { useParams } from "next/navigation";
import { SetStateAction, useState } from "react";

import Apollo from "@/apollo/apollo";
import gql from "graphql-tag";
import { useUserContext } from "@/contexts/user.context";
import { PrimaryButton } from "../ui/buttons.ui";
import DoneIcon from "@/assets/icons/done";

export default function Quizz({
  sliders,
  changer,
  quantity,
  step,
  course_id,
}: {
  sliders: any;
  changer: SetStateAction<any>;
  quantity: number;
  step: number;
  course_id: any;
}) {
  const { user } = useUserContext();
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean>(false);

  const insertScore = async () => {
    const schema = gql`
      mutation Mutation($levelUpInput: LevelUpInput) {
        levelUp(levelUpInput: $levelUpInput) {
          data
          message
          status
        }
      }
    `;

    await Apollo.mutate({
      mutation: schema,
      variables: {
        levelUpInput: {
          user_id: Number(user.id),
          course_id: Number(course_id),
          score: 10,
          missiondone: false,
          quizDone: true,
        },
      },
    });
  };

  if (step >= quantity) {
    return (
      <div>
        <div className="w-full h-full">
          <h3>congratulations</h3>
          <p>
            your score:<span>{score}</span>
          </p>
        </div>
        <PrimaryButton>start Mission</PrimaryButton>
      </div>
    );
  }

  const { options, correct_answer, question } = sliders;

  const { score: scoreNumber, answer: correctAnswer } = correct_answer;

  const submitHandle = async (answer: string) => {
    if (answer === correctAnswer) {
      setCorrect(true);

      setTimeout(() => {
        setScore(score + scoreNumber);
        changer((prev: any) => prev + 1);
        insertScore();
        setCorrect(false);
      }, 2000);
    }
  };

  const correctStyle = correct
    ? "bg-green-300 border-green-300"
    : "bg-transparent";

  return (
    <div className="w-full h-full flex items-start">
      <div className="h-full object-cover relative w-1/2">
        <Image
          src={quizzImage}
          alt="quizz"
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full h-full flex items-start justify-center top-0 left-0 bg-black/60 flex-col gap-3 p-8">
          <h3 className="text-2xl font-bold text-white">
            stage {`${step + 1} / ${quantity}`}
          </h3>
          <div className="w-full flex flex-col gap-1">
            <p className="text-white font-extrabold text-3xl">{question}</p>
            <p className="text-white/30">Select only one answer</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-3 bg-[#2F80ED] relative h-full flex flex-col gap-9 justify-center ">
        {correct ? (
          <div className="flex items-center justify-center gap-5">
            <DoneIcon fill="white" />
            <h3 className=" text-green-300 text-bold text-3xl ">correct</h3>
          </div>
        ) : (
          ""
        )}
        {options.map((option: any) => (
          <QuizCard onClick={() => submitHandle(option)} answer={option} />
        ))}
      </div>
    </div>
  );
}
