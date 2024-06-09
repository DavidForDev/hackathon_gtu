import Image from "next/image";

export interface CourseCardTypes {
  stage: string;
  title: string;
  subTitle: string;
  href: string;
}

import courseCardImage from "../../assets/images/coursecard.png";
import Link from "next/link";

const CourseCard = ({ stage, title, subTitle, href }: CourseCardTypes) => {
  return (
    <div className=" cursor-pointer rounded-md relative max-w-sm w-full object-cover">
      <Link href={href}>
        <Image
          src={courseCardImage}
          alt="course"
          className="object-cover w-full"
        />
        <div className="px-4 py-5 absolute w-full h-full flex flex-col justify-between top-0 left-0 bg-black/30">
          <p className="text-white/60">{stage}</p>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl capitalize text-white">{title}</h3>
            <p className="text-white/60">{subTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
