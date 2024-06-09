// -------------- Types ---------------- \\
import { InputTypes } from "@/types/ui/input.types";

export const PrimaryInput = ({ className, ...props }: InputTypes) => {
    const style = className ? className : ''

  return(
    <div className="w-full py-3 px-2 bg-white/30 rounded-md">
        <input {...props} className={`${style}  text-white bg-transparent text-base placheolder:text-white outline-none`} />
    </div>
  )
};
