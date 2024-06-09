import { ReactNode } from "react"

export interface DialogsTypes {
    data: {
        description: string,
        character: any
    }[]
}

import DialogCard from "./_components/dialogCard"

const Dialogs = ({data}:DialogsTypes) => {
    return (
       <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 from-35% to-black/90 to-75%">
         {data.map((el, index) => {
            return (
                <DialogCard key={index} description={el.description} character={el.character} />
            )
         })}
       </div>
    )
}


export default Dialogs