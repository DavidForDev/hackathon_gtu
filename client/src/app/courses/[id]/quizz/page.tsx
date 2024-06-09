"use client";

import Image from "next/image";

import Quizzer from "@/components/quizz";

import quizzDB from "@/db/quizz.json";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Quizz() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const { courses } = quizzDB;

  const { id } = useParams();

  const quizFilter: any = courses.find((x) => x.course_id === Number(id));

  return (
    <Quizzer
      changer={setCurrentSlide}
      sliders={quizFilter.questions[currentSlide]}
      quantity={quizFilter.questions.length}
      course_id={id}
      step={currentSlide}
    />
  );
}
