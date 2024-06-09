// -------------- Types ---------------- \\
import { ButtonTypes } from "@/types/ui/button.types";

export const PrimaryButton = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className=" bg-[#2F80ED] p-3 text-white rounded-lg flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }: ButtonTypes) => {
  return (
    <button className=" bg-[#2F80ED]/60 p-5 gap-3 text-white rounded-lg flex items-center justify-center">
      {children}
    </button>
  );
};
