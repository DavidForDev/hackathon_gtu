import { ReactNode } from "react";

import Background from "../../public/bg.jpg";
import Image from "next/image";

export interface BackgroundLayoutTypes {
  children: ReactNode;
  src: string;
}

const BackgroundLayout = ({ children, src }: BackgroundLayoutTypes) => {
  return (
    <div className="w-full h-full relative">
      <Image className="w-full h-full object-cover" src={Background} alt="bg" />
      <div className="absolute w-full h-full top-0 left-0 bg-black/40 py-6 px-4">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
