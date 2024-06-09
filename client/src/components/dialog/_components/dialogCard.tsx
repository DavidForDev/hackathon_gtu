import Image from 'next/image'

export interface DialogCardType {
    description: string,
    character: any
}

// -------------- Images ---------------  //
import General from '../../../assets/images/general.png'
import { PrimaryButton } from '@/components/ui/buttons.ui'


const DialogCard = ({description, character}:DialogCardType) => {
    return (
        <div className='relative px-12 flex items-end h-full gap-10 flex-col py-20 justify-center self-end'>
            <div className='flex items-end justify-center'>
                <h3 className='text-white text-4xl leading-relaxed max-w-5xl w-full'>{description}</h3>
                <Image src={General} width={170} height={160} alt="char" />
            </div>
            <PrimaryButton>Next</PrimaryButton>
        </div>
    )
}


export default DialogCard