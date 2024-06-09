"use client";

import BackgroundLayout from "@/layouts/background.layout";
import Navigation from "@/components/navigation";
import CourseCard from "@/components/course/courseCard";

import CourseDb from "@/db/courses.json";

export default function Courses() {
  const { courses } = CourseDb;

  return (
    <BackgroundLayout src="/videos/welcome.mp4">
      <div className="flex flex-col gap-20 items-center justify-center">
        <Navigation />
        <div className="flex gap-8 flex-wrap w-full items-center justify-center">
          {courses.map((course, index) => (
            <CourseCard
              key={course.uid}
              href={`/courses/${course.uid}`}
              stage={`stage ${course.stage}`}
              title={course.title}
              subTitle="Course"
            />
          ))}
        </div>
      </div>
    </BackgroundLayout>
  );
}
