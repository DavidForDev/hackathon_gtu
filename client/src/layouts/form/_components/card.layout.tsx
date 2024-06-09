'use client'

import DoneIcon from "@/assets/icons/done";
import { PrimaryButton } from "@/components/ui/buttons.ui";
import { PrimaryInput } from "@/components/ui/input.ui";
import { InputTypes } from "@/types/ui/input.types";

export interface FormLayout extends InputTypes {
    label: string,
}

const FormCard = ({placeholder, type, label, onChange}:FormLayout) => {
    return (
    <div className="w-full justify-center flex flex-col gap-5 p-3">
        <h3 className="text-white text-xl">-{label}</h3>
        <div className="flex gap-2 items-center w-full">
        <PrimaryInput onChange={onChange} placeholder={placeholder} type={type} className="rounded-xl w-full" />
        </div>
      </div>
    )
    
}


export default FormCard;